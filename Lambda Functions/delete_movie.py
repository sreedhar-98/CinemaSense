import boto3
import json

dynamodb = boto3.resource('dynamodb')
table_name = 'User_Profile'

def lambda_handler(event, context):
    table = dynamodb.Table(table_name)
    uid = json.loads(event['body'])['uid']
    movie_id = json.loads(event['body'])['movie_id'] 

    try:
        # 1. Get the existing list
        response = table.get_item(Key={'uid': uid}, ProjectionExpression='add_list_movies')
        add_movie_list = response['Item'].get('add_list_movies', [])
        

        # 2. Find the movie to delete
        for i, movie in enumerate(add_movie_list):
            if movie.get('id') == movie_id:
                del add_movie_list[i]  # Remove the movie
                break  # Movie found, no need to iterate further

        # 3. Update DynamoDB
        table.update_item(
            Key={'uid': uid},
            UpdateExpression='SET add_list_movies = :new_list',
            ExpressionAttributeValues={':new_list': add_movie_list} 
        )

        return {
            'statusCode': 200,
            'body': json.dumps({
                "message":"Movie deleted"
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'Error deleting movie: {str(e)}'
        }
