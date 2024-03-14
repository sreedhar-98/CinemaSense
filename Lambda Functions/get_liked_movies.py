import boto3
import json

dynamodb = boto3.resource('dynamodb')
table_name = 'User_Profile'

def lambda_handler(event, context):
    table = dynamodb.Table(table_name)
    uid = json.loads(event['body'])['uid']

    try:
        response = table.get_item(Key={'uid': uid}, ProjectionExpression='recommended')
        if 'Item' in response:
            movies = response['Item'].get('recommended', [])
            return {
                "statusCode": 200,
                "body": json.dumps({"movies": movies})
            }
        else:
            return {
                "statusCode": 404,
                "body": "User not found"
            }
    except Exception as e:  # Catch-all for other potential errors
        return {
            "statusCode": 500,
            "body": json.dumps({"error": f"Error fetching movie list: {str(e)}"})
        }
