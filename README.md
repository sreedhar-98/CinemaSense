# CinemaSense: AI-Powered Movie Recommendation System

CinemaSense is an intelligent movie recommendation platform that delivers a personalized experience through AI-powered search, dynamic recommendations, and a user-friendly interface. 

## Key Features

* **AI-Powered Search:** Discover movies using natural language prompts. Find the perfect film based on your descriptions, thanks to embedding-based similarity matching and the Pinecone vector database.
* **Dynamic Recommendations:** Receive tailored suggestions based on your favorite movies.
* **Rich Movie Database:** Explore a vast collection of movies powered by the TMDb API.
* **MyList:** Save your favorite movies to a personalized watchlist.
* **Seamless User Experience:** Enjoy a streamlined and intuitive interface built with React.js.

[Project Website](https://main.d2s1nmhyis4n0i.amplifyapp.com/)

## Technical Overview

* **Frontend:**
    * React.js (JavaScript library for building user interfaces) 
* **Backend:**
    * AWS Serverless Architecture 
        * AWS Lambda (Python functions)
        * AWS DynamoDB (NoSQL database for storing user data)
        * AWS API Gateway.
        * Pinecone (vector database for storing and querying movie embeddings)
    *  Google Gemini AI (Large Language Model for generating movie embeddings)
   
* **Authentication:**
    * Firebase Authentication (user authentication service)
* **State Management:**
   * Redux Toolkit Query (RTK Query for data fetching and caching)
* **Deployment:**
    * AWS Amplify (for hosting and continuous deployment)

## Prerequisites
* An AWS account with the necessary permissions
* A Firebase project
* A TMDb API key 
* A Pinecone API key
* Google Gemini AI API key

