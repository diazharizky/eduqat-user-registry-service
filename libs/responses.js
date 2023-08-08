const buildResponse = (statusCode, body) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

exports.success = (body) => {
  return buildResponse(200, body)
}

exports.fatal = (body) => {
  return buildResponse(500, body)
}