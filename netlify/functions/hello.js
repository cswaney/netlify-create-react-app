exports.handler = async function (event) {
  console.log("Well hello there!");
  const response = {
    role: 'user',
    content: 'Well hello there!',
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
