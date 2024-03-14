import json
import boto3

TABLE_NAME = "User_Profile"

dynamodb = boto3.resource('dynamodb')
client=boto3.client('dynamodb')
table = dynamodb.Table(TABLE_NAME)

    
    
def lambda_handler(event, context):
    user_id = json.loads(event['body'])['uid']
    new_movie_data = json.loads(event['body'])['movie']
    
    if not user_id or not new_movie_data:
        return json.dumps({
            'statusCode': 400,
            'body': 'User ID and Movie_Data are required'
        })

    try:
        response = table.update_item(
            Key={
                'uid': user_id,
            },
            UpdateExpression="SET recommended = list_append(if_not_exists(recommended, :empty_list), :movies)",
            ExpressionAttributeValues={
                ':movies': [new_movie_data],
                ':empty_list': [] 
            },
            ConditionExpression="attribute_exists(uid)", 
            ReturnValues="UPDATED_NEW"
        )

        return json.dumps({
            'statusCode': 200,
            'body': json.dumps({
                "message":"Recommendation added"
            })
        })

    except client.exceptions.ConditionalCheckFailedException:
        return json.dumps({
            'statusCode': 404,
            'body': 'User not found'
        })

    except Exception as e:
        print(f"Error updating item: {e}")
        return json.dumps({
            'statusCode': 500,
            'body': 'Error updating user information'
        })
