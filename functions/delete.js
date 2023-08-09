'use strict'

const { DeleteCommand } = require('@aws-sdk/lib-dynamodb')
const dbClient = require('../libs/dbClient')
const { success, fatal } = require('../libs/responses')

module.exports.handler = async (e) => {
  try {
    await dbClient.send(new DeleteCommand({
      TableName: process.env.DB_TABLE,
      Key: {
        id: e.pathParameters.id
      }
    }))

    return success({
      message: 'User successfully deleted'
    })
  } catch (err) {
    console.log(err)

    return fatal('Error unable to delete user')
  }
}
