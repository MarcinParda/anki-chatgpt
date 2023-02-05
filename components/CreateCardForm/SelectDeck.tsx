import { ALL_DECKS_NAMES } from '@/consts/tanstackQueryKeys';
import { getAllDecksNames } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Select } from '../Select';

interface SelectDeckProps {
  register: UseFormRegisterReturn<'deck'>;
}

export const SelectDeck = ({ register }: SelectDeckProps) => {
  const { isLoading, data } = useQuery([ALL_DECKS_NAMES], getAllDecksNames);

  const options =
    data?.map((deckName) => ({
      label: deckName,
      value: deckName,
    })) || [];

  return (
    <Select
      label="Select deck"
      options={options}
      loading={isLoading}
      register={register}
    />
  );
};
