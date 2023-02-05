import { Button } from '@/components/Button';
import React from 'react';
import { TagMultiselect } from './TagMultiselect';
import { GenerateAnswerForm } from './GenerateAnswerForm';
import { SelectDeck } from './SelectDeck';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface CreateCardForm {
  answer: string;
  tags: string[];
  deck: string;
  question: string;
}

export const CreateCardForm = () => {
  const { register, handleSubmit } = useForm<CreateCardForm>();
  const onSubmit: SubmitHandler<CreateCardForm> = (data) => console.log(data);

  return (
    <section className="mx-auto lg:min-w-[768px]">
      <form
        className="flex flex-col gap-4 pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <GenerateAnswerForm register={register} />
        <hr className="my-2 text-slate-300" />
        <SelectDeck register={register('deck')} />
        <TagMultiselect register={register('tags')} />
        <Button type="submit" label="Add anki card to deck" />
      </form>
    </section>
  );
};
