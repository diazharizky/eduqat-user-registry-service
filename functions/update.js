'use strict'

const { GetCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb')
const md5 = require('md5')
const dbClient = require('../libs/dbClient')
const { success, fatal } = require('../libs/responses')

module.exports.handler = async (e) => {
  const data = JSON.parse(e.body)
  const timestamp = new Date().getTime()

  try {
    const resp = await dbClient.send(new GetCommand({
      TableName: process.env.DB_TABLE,
      Key: {
        id: e.pathParameters.id
      }
    }))

    const existUser = resp.Item

    const cmd = new UpdateCommand({
      TableName: process.env.DB_TABLE,
      Key: {
        id: e.pathParameters.id
      },
      UpdateExpression: 'SET email = :email, fullName = :fullName, password = :password, updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':email': data.email || existUser.email,
        ':fullName': data.fullName || existUser.fullName,
        ':password': data.password ? md5(data.password) : existUser.password,
        ':updatedAt': timestamp
      }
    })

    await dbClient.send(cmd)

    return success({
      message: 'User successfully updated'
    })
  } catch (err) {
    console.log(err)

    return fatal({
      message: 'Error unable to update user'
    })
  }
}
