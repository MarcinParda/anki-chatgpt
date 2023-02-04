import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from '../Input';

export const GenerateAnswerForm = () => {
  const [question, setQuestion] = useState('What is ChatGPT-3?');
  const [answer, setAnswer] = useState('Here goes answer...');

  const generateAnswer = async () => {
    const response = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <>
      <div className="flex gap-5">
        <Input
          label="Enter your question"
          type="text"
          disabled={false}
          name="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <span className="w-52 self-end">
          <Button
            onClick={generateAnswer}
            icon={<FiSend />}
            label="Generate answer"
            // loading={pageStatus === 'GENERATING_ANSWER'}
            // disabled={pageStatus === 'GENERATING_ANSWER'}
          />
        </span>
      </div>
      <label>
        <span>Answer to question</span>
        <textarea
          title="answer"
          className="mt-1 w-full rounded-lg border border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
    </>
  );
};
