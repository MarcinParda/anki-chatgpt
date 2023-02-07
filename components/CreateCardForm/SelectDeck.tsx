import { ALL_DECKS_NAMES } from '@/consts/tanstackQueryKeys';
import { getAllDecksNames } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Select } from '../Select';

interface SelectDeckProps {
  register: UseFormRegisterReturn<'deckName'>;
  setDeckName: (deckName: string) => void;
}

export const SelectDeck = ({ register, setDeckName }: SelectDeckProps) => {
  const { isLoading, data } = useQuery([ALL_DECKS_NAMES], getAllDecksNames);

  const options =
    data?.map((deckName) => ({
      label: deckName,
      value: deckName,
    })) || [];

  useEffect(() => {
    const deckName = options.at(0)?.value;
    if (deckName) {
      setDeckName(deckName);
    }
  }, [options]);

  return (
    <Select
      label="Select deck"
      options={options}
      loading={isLoading}
      register={register}
    />
  );
};
