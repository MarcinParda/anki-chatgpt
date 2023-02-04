import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { getAllAnkiTags } from '@/utils/api';
import { ALL_TAGS } from '@/consts/tanstackQueryKeys';

const CreateCardPage = () => {
  const [question, setQuestion] = useState('What is nuclear fusion?');
  const [answer, setAnswer] = useState('Here goes answer...');
  const [tags, setTags] = useState('Physics');
  const [pageStatus, setPageStatus] = useState<
    | 'INITIAL'
    | 'GENERATING_ANSWER'
    | 'ANSWER_GENERATED'
    | 'ADDING_ANKI'
    | 'ANKI_ADDED'
  >('INITIAL');

  const tagsQuery = useQuery([ALL_TAGS], getAllAnkiTags);

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
    <section className="mx-auto pt-10">
      <div className="flex gap-5 mb-4">
        <Input
          label="Enter your question"
          type="text"
          disabled={false}
          name="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <span className="self-end w-52">
          <Button
            onClick={generateAnswer}
            icon={<FiSend />}
            label="Generate answer"
            loading={pageStatus === 'GENERATING_ANSWER'}
            disabled={pageStatus === 'GENERATING_ANSWER'}
          />
        </span>
      </div>
      <span>Answer to question</span>
      <textarea
        title="answer"
        className="mt-1 mb-4 border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="mb-4">
        <Select
          label="Select deck"
          options={[
            { label: 'Deck 1', value: 'deck-1' },
            { label: 'Deck 2', value: 'deck-2' },
            { label: 'Deck 3', value: 'deck-3' },
          ]}
        />
      </div>
      <div className="mb-6">
        <Input
          label="Tags (optional)"
          type="text"
          disabled={false}
          name="question-input"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <Button
        onClick={addAnki}
        label="Add anki card to deck"
        disabled={isAnkiButtonDisabled()}
      />
    </section>
  );
};

export default CreateCardPage;
