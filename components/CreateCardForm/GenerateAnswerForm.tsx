import { getAnswer } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { Button } from '../Button';
import { Input } from '../Input';
import { CreateCardFormData } from './CreateCardForm';

interface GenerateAnswerFormProps {
  register: UseFormRegister<CreateCardFormData>;
  getQuestion: () => string;
  setAnswer: (answer: string) => void;
}

export const GenerateAnswerForm = ({
  register,
  setAnswer,
  getQuestion,
}: GenerateAnswerFormProps) => {
  const { isLoading, mutate } = useMutation(getAnswer, {
    onSuccess: (answer) => setAnswer(answer),
  });

  const generateAnswer = () => {
    mutate(getQuestion());
  };

  return (
    <>
      <div>
        <label>Enter your question</label>
        <div className="flex gap-5">
          <span className="w-8/12">
            <Input
              name="question"
              type="text"
              disabled={false}
              placeholder="Here goes answer..."
              register={register('question')}
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
          className="mt-1 w-full rounded-lg border border-form-stroke py-3 px-5 font-medium text-body-color placeholder-slate-400 outline-none transition focus:border-primary active:border-primary disabled:cursor-wait disabled:bg-[#F5F7FD]"
          disabled={isLoading}
          placeholder="Here goes answer..."
          {...register('answer')}
        />
      </label>
    </>
  );
};
