import { Input } from '@/components/Input';
import { Submit } from '@/components/Submit';
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const CreateCardPage = () => {
  const [question, setQuestion] = useState('What is nuclear fusion?');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className="max-w-5xl mx-auto pt-10">
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <Input
          label="Enter your question"
          type="text"
          disabled={false}
          name="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <span className="self-end">
          <Submit icon={<FiSend />} label="Generate answer" />
        </span>
      </form>
    </section>
  );
};

export default CreateCardPage;
