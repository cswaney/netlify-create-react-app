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
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,  // JSON.parse(event.body)
  })
    .then((response) => {
      const assistantMessage = response.data.choices[0].message;
      return {
        statusCode: 200,
        body: JSON.stringify([...messages, assistantMessage]),
      }
    })
    .catch((response) => {
      return {
        statusCode: 400,
        body: JSON.stringify(response),
      }
    })
};
