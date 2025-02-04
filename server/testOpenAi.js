import dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

(async () => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: "Hello, world!",
      max_tokens: 5,
      temperature: 0.7,
    });
    console.log(response);
  } catch (error) {
    console.error('Error in testOpenAI:', error.response ? error.response.data : error.message);
  }
})();
