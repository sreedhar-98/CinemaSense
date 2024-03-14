import boto3
import json
import uuid  # Assuming you want to generate UUIDs

# Configuration
TABLE_NAME = "User_Profile"

dynamodb = boto3.resource('dynamodb')

table = dynamodb.Table(TABLE_NAME)

def lambda_handler(event, context):
    
    user_id = json.loads(event['body'])['uid']

    try:
        response = table.put_item(
            Item={
                'uid': user_id,
                "add_list_movies":[],
                "recommended":[]
            }
        )

        return json.dumps({
            'statusCode': 200,
            'body': "User entry created"
        })

    except Exception as e:
        print(f"Error adding item: {e}")
        return json.dumps({
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}) 
        })
