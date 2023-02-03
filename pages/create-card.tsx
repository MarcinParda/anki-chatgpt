import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Submit } from '@/components/Submit';
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const CreateCardPage = () => {
  const [question, setQuestion] = useState('What is nuclear fusion?');
  const [answer, setAnswer] = useState('Here goes answer...');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className="max-w-5xl mx-auto pt-10">
      <Select
        label="Select deck"
        options={[
          { label: 'Deck 1', value: 'deck-1' },
          { label: 'Deck 2', value: 'deck-2' },
          { label: 'Deck 3', value: 'deck-3' },
        ]}
      />
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <Input
          label="Enter your question"
          type="text"
          disabled={false}
          name="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <span className="self-end w-52">
          <Submit icon={<FiSend />} label="Generate answer" />
        </span>
      </form>
      <textarea
        title="answer"
        className="mt-4 border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
        readOnly
        value={answer}
      />
    </section>
  );
};

export default CreateCardPage;
