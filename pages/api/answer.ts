import { NextApiHandler } from 'next';

const AnswerHandler: NextApiHandler = async (req, res) => {
  const { question } = req.body;

  res.json({ question, answer: '42' });
};

export default AnswerHandler;
