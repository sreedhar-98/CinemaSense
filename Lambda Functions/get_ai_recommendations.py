import json
import google.generativeai as genai
import requests
import os


def lambda_handler(event, context):
    headers={
        "Access-Control-Allow-Headers":"*",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"*"
    }
    try:
        # 1. Input Validation
        prompt=event["queryStringParameters"]["prompt"]
        print(prompt)

        if not prompt:
            return json.dumps({
                "statusCode": 400,# Bad Request
                "body": {"message": "Missing 'prompt' in request params"}
            })

    except (KeyError, json.JSONDecodeError) as e:
        return json.dumps({
            "statusCode": 400,

            "body": {"message": "Invalid input format.", "error": str(e)}
        })

    try:
        # 2. Environment Variables
        PINECONE_API_KEY = os.environ.get('pinecone_api')
        GEMINI_API_KEY = os.environ.get('gemini_api')
        INDEX_HOST = os.environ.get('HOST')
        if not all([PINECONE_API_KEY, GEMINI_API_KEY, INDEX_HOST]):
            return json.dumps({
                "statusCode": 500,  # Internal Server Error
                
                "body": {"message": "Missing environment variables."}
            })

    except Exception as e:  # Catch-all for any unexpected error with environment variables
        return json.dumps({
            "statusCode": 500,
            
            "body": {"message": "Error loading environment variables.", "error": str(e)}
        })

    try:
        # 3. Embedding with GenAI
        genai.configure(api_key=GEMINI_API_KEY)
        result = genai.embed_content(
            model="models/embedding-001",
            content=prompt,
            task_type="SEMANTIC_SIMILARITY")

    except genai.errors.GenAIError as e:  # Specific errors from the GenAI library
        return json.dumps({
            "statusCode": 400,
            
            "body": {"message": "Error generating embedding.", "error": str(e)}
        })
    except Exception as e:  # Catch-all for other unexpected errors with GenAI
        return json.dumps({
            "statusCode": 500,
           
            "body": {"message": "Error generating embedding.", "error": str(e)}
        })

    try:
        # 4. Pinecone Query
        data = {
            "vector": result['embedding'],
            "topK": 5,
            "includeMetadata": True
        }
        pinecone_url = f"{INDEX_HOST}/query"
        headers = {
            "Api-Key": PINECONE_API_KEY,
            "Content-Type": "application/json"
        }
        response = requests.post(pinecone_url, headers=headers, json=data)
        response.raise_for_status()  # Raise an exception if the request fails

        movies_dat = response.json()

        return json.dumps({
            "statusCode": 200,
            "headers":headers,
            
            "body": {"data": movies_dat}
        })

    except requests.exceptions.RequestException as e:
        return json.dumps({
            "statusCode": 503,  # Service Unavailable (for Pinecone issues)
            "body": {"message": "Error connecting to Pinecone.", "error": str(e)}
        })
    except (KeyError, ValueError) as e:  # For JSON parsing problems
        return json.dumps({
            "statusCode": 400,
            "body": {"message": "Error parsing Pinecone response.", "error": str(e)}
        })
    except Exception as e:  # Catch-all for any unforeseen error related to Pinecone interaction
        return json.dumps({
            "statusCode": 500,
            "body": {"message": "Error processing Pinecone results.", "error": str(e)}
        })
