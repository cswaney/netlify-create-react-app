import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant.",
  },
  {
    role: "user",
    content: "Who won the world series in 2020?"
  },
]

exports.handler = async function (event, context) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,  // JSON.parse(event.body)
  })
  if (response.status === 200) {
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } else {
    return {
      statusCode: response.status,
      body: response.statusText, 
    }
  }
};
