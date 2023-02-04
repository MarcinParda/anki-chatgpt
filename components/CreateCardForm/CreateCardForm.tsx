import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { TagMultiselect } from './TagMultiselect';

export const CreateCardForm = () => {
  const [question, setQuestion] = useState('What is ChatGPT-3?');
  const [answer, setAnswer] = useState('Here goes answer...');
  const [pageStatus, setPageStatus] = useState<
    | 'INITIAL'
    | 'GENERATING_ANSWER'
    | 'ANSWER_GENERATED'
    | 'ADDING_ANKI'
    | 'ANKI_ADDED'
  >('INITIAL');

  const generateAnswer = async () => {
    setPageStatus('GENERATING_ANSWER');
    const response = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
    setPageStatus('ANSWER_GENERATED');
  };

  const addAnki = async () => {
    setPageStatus('ADDING_ANKI');
    setPageStatus('ANKI_ADDED');
  };

  const isAnkiButtonDisabled = () => {
    if (question.trim() === '' || answer.trim() === '') {
      return true;
    }
    return false;
  };
  return (
    <section className="mx-auto flex flex-col gap-4 pt-10">
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
            loading={pageStatus === 'GENERATING_ANSWER'}
            disabled={pageStatus === 'GENERATING_ANSWER'}
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
      <Select
        label="Select deck"
        options={[
          { label: 'Deck 1', value: 'deck-1' },
          { label: 'Deck 2', value: 'deck-2' },
          { label: 'Deck 3', value: 'deck-3' },
        ]}
      />
      {/* <div className="mb-6">
        <Input
          label="Tags (optional)"
          type="text"
          disabled={false}
          name="question-input"
          value={tagsQuery.data}
          onChange={(e) => setTags(e.target.value)}
        />
      </div> */}
      <TagMultiselect />
      <Button
        onClick={addAnki}
        label="Add anki card to deck"
        disabled={isAnkiButtonDisabled()}
      />
    </section>
  );
};
