'use strict';

const { GetCommand } = require('@aws-sdk/lib-dynamodb')
const dbClient = require('../libs/dbClient');
const { success, fatal } = require('../libs/responses')

module.exports.handler = async (e) => {
  try {
    const resp = await dbClient.send(new GetCommand({
      TableName: process.env.DB_TABLE,
      Key: {
        id: e.pathParameters.id
      }
    }))

    return success(resp.Item)
  } catch (err) {
    console.log(err)

    return fatal("Error unable to retrieve user")
  }
}