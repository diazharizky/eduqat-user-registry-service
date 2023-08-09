'use strict'

const uuid = require('uuid')
const md5 = require('md5')
const { PutCommand } = require('@aws-sdk/lib-dynamodb')
const dbClient = require('../libs/dbClient')
const { success, fatal } = require('../libs/responses')

module.exports.handler = async (e) => {
  const data = JSON.parse(e.body)
  const timestamp = new Date().getTime()

  const params = {
    TableName: process.env.DB_TABLE,
    Item: {
      id: uuid.v1(),
      email: data.email,
      fullName: data.fullName,
      password: md5(data.password),
      createdAt: timestamp,
      updatedAt: timestamp
    }
  }

  try {
    const cmd = new PutCommand(params)
    await dbClient.send(cmd)

    return success(params.Item)
  } catch (err) {
    console.log(err)

    return fatal({
      message: 'Error unable to create new user'
    })
  }
}
