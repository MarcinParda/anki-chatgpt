import { Button } from '@/components/Button';
import React from 'react';
import { TagMultiselect } from './TagMultiselect';
import { GenerateAnswerForm } from './GenerateAnswerForm';
import { SelectDeck } from './SelectDeck';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createAnkiCard } from '@/utils/api';

export interface CreateCardFormData {
  answer: string;
  tags: string[];
  deck: string;
  question: string;
}

type Optional<T> = { [P in keyof T]?: T[P] };

const defaultValues: Optional<CreateCardFormData> = {
  tags: [],
  question: 'What is ChatGPT?',
};

export const CreateCardForm = () => {
  const { mutate } = useMutation(createAnkiCard, {
    onSuccess: () => reset(),
  });
  const { register, handleSubmit, getValues, setValue, reset } =
    useForm<CreateCardFormData>({ defaultValues });
  const setAnswer = (answer: string) => setValue('answer', answer);
  const onSubmit: SubmitHandler<CreateCardFormData> = (data) => mutate(data);
  const getQuestion = () => getValues('question');

  return (
    <section className="mx-auto lg:min-w-[768px]">
      <form
        className="flex flex-col gap-4 pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <GenerateAnswerForm
          register={register}
          getQuestion={getQuestion}
          setAnswer={setAnswer}
        />
        <hr className="my-2 text-slate-300" />
        <SelectDeck register={register('deck')} />
        <TagMultiselect register={register('tags')} />
        <Button type="submit" label="Add anki card to deck" />
      </form>
    </section>
  );
};
