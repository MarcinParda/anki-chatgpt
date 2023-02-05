import { Button } from '@/components/Button';
import React from 'react';
import { TagMultiselect } from './TagMultiselect';
import { GenerateAnswerForm } from './GenerateAnswerForm';
import { SelectDeck } from './SelectDeck';

export const CreateCardForm = () => {
  return (
    <section className="mx-auto lg:min-w-[768px]">
      <form className="flex flex-col gap-4 pt-10">
        <GenerateAnswerForm />
        <hr className="my-4 text-slate-300" />
        <SelectDeck />
        <TagMultiselect />
        <Button onClick={() => {}} label="Add anki card to deck" />
      </form>
    </section>
  );
};
