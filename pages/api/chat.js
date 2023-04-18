import { OpenAI } from "langchain/llms/openai";

const openaiApiKey = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openaiApiKey, temperature: 0.9 });


export default async (req, res) => {
  if (req.method === 'POST') {
    const inputText = req.body.input;

    try {
      const response = await model.call(inputText);
      res.status(200).json({ output: response });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
};
