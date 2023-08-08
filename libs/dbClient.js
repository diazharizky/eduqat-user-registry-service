'use strict';

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb')

const client = new DynamoDBClient({
  endpoint: process.env.DB_URL
});

module.exports = DynamoDBDocumentClient.from(client)
