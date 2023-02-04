import { ALL_DECKS_NAMES } from '@/consts/tanstackQueryKeys';
import { getAllDecksNames } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Select } from '../Select';

export const SelectDeck = () => {
  const { isLoading, data } = useQuery([ALL_DECKS_NAMES], getAllDecksNames);

  const options =
    data?.map((deckName) => ({
      label: deckName,
      value: deckName,
    })) || [];

  return <Select label="Select deck" options={options} loading={isLoading} />;
};
