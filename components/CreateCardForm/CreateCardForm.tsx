import { Button } from '@/components/Button';
import React from 'react';
import { TagMultiselect } from './TagMultiselect';
import { GenerateAnswerForm } from './GenerateAnswerForm';
import { SelectDeck } from './SelectDeck';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createAnkiCard } from '@/utils/api';
import { toast } from 'react-toastify';
import { capitalize } from '@/utils/helpers';

export interface CreateCardFormData {
  answer: string;
  tags: string[];
  deckName: string;
  question: string;
}

export const CreateCardForm = () => {
  const createCardNotify = (deck: string) =>
    toast(`Card created in deck: ${deck}`, { type: 'success' });
  const errorCreateCardNotify = (error: unknown) => {
    if (typeof error === 'string') {
      toast(capitalize(error), { type: 'error' });
      return;
    }
    console.error(error);
    toast(
      'Error during creating card! You can read the error in console (Press F12)',
      { type: 'error' }
    );
  };
  const { mutate } = useMutation(createAnkiCard, {
    onSuccess: (_, { deckName }) => {
      createCardNotify(deckName);
      reset();
    },
    onError: (error) => {
      errorCreateCardNotify(error);
    },
  });
  const { register, handleSubmit, getValues, setValue, reset } =
    useForm<CreateCardFormData>();
  const setAnswer = (answer: string) => setValue('answer', answer);
  const setDeckName = (deckName: string) => setValue('deckName', deckName);
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
        <SelectDeck register={register('deckName')} setDeckName={setDeckName} />
        <TagMultiselect register={register('tags')} />
        <Button type="submit" label="Add anki card to deck" />
      </form>
    </section>
  );
};
