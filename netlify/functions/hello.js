exports.handler = async function (event) {
  const response = {
    role: 'user',
    content: 'Well hello there!',
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
