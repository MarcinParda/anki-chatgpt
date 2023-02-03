import { Input } from '@/components/Input';
import React from 'react';
import { FaDove } from 'react-icons/fa';

const CreateCardPage = () => {
  return (
    <section className="max-w-5xl mx-auto pt-10">
      <form className="flex gap-5">
        <Input
          label="Wpisz swoje pytanie"
          type="text"
          disabled={false}
          name="question-input"
          placeholder="Czym jest fuzja jądrowa?"
        />
      </form>
    </section>
  );
};

export default CreateCardPage;
