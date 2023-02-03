import { NextApiHandler } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const AnswerHandler: NextApiHandler = async (req, res) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const { question } = req.body;

  if (question.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid question',
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Answer briefly to the following question: 
      ${question}`,
      temperature: 0.5,
    });
    res.status(200).json({ answer: completion.data.choices[0].text });
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.',
      },
    });
  }
};

export default AnswerHandler;
