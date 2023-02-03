import { NextApiHandler } from 'next';

const API_KEY = process.env.OPENAI_API_KEY;
const model = 'text-davinci-002';
const url = `https://api.openai.com/v1/engines/${model}/completions`;

const AnswerHandler: NextApiHandler = async (req, res) => {
  const { question } = req.body;

  if (question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid question',
      },
    });
    return;
  }

  const data = {
    prompt: `Answer to the following question:
    ${question}`,
    temperature: 0.5,
    max_tokens: 512,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const completion = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());

    res
      .status(200)
      .json({ answer: completion.choices[0].text.replace(/^\n+/, '') });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      },
    });
  }
};

export default AnswerHandler;
