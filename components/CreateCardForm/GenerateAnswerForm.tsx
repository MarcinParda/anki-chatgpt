import { ANSWER } from '@/consts/tanstackQueryKeys';
import { getAnswer } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from '../Input';
import { CreateCardForm } from './CreateCardForm';

interface GenerateAnswerFormProps {
  register: UseFormRegister<CreateCardForm>;
}

export const GenerateAnswerForm = ({ register }: GenerateAnswerFormProps) => {
  const [question, setQuestion] = useState('What is ChatGPT-3?');
  const [answer, setAnswer] = useState('Here goes answer...');
  const { data, isLoading, mutate } = useMutation([ANSWER], getAnswer);

  const generateAnswer = () => {
    mutate(question);
  };

  useEffect(() => {
    if (data) {
      setAnswer(data);
    }
  }, [data]);

  return (
    <>
      <div>
        <label>Enter your question</label>
        <div className="flex gap-5">
          <span className="w-8/12">
            <Input
              type="text"
              disabled={false}
              name="question-input"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </span>
          <span className="w-4/12">
            <Button
              onClick={generateAnswer}
              icon={<FiSend />}
              label="Generate answer"
              loading={isLoading}
              disabled={isLoading}
            />
          </span>
        </div>
      </div>
      <label>
        <span>Answer to question</span>
        <textarea
          title="answer"
          {...register('answer')}
          className="mt-1 w-full rounded-lg border border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-wait disabled:bg-[#F5F7FD]"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isLoading}
        />
      </label>
    </>
  );
};
