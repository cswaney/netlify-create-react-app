import { Configuration, OpenAIApi } from 'openai';

exports.handler = async function (event) {
  console.log("This isn't really a secret: ", process.env.TEST_VARIABLE);
  const response = {
    role: 'user',
    content: process.env.TEST_VARIABLE,
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
