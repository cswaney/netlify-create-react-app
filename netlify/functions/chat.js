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
  {
    role: "assistant",
    content: "The Los Angeles Dodgers won the World Series in 2020."
  },
  {
    role: "user",
    content: "Where was it played?"
  },
]


exports.handler = async function (event) {
  // const messages = JSON.parse(event.body);
  openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    // messages: JSON.parse(event.body),
    messages: messages,
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
