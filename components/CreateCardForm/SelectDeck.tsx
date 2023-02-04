import React from 'react';
import { Select } from '../Select';

export const SelectDeck = () => {
  return (
    <Select
      label="Select deck"
      options={[
        { label: 'Deck 1', value: 'deck-1' },
        { label: 'Deck 2', value: 'deck-2' },
        { label: 'Deck 3', value: 'deck-3' },
      ]}
    />
  );
};
