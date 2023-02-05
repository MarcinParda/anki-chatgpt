import { CreateCardFormData } from '@/components/CreateCardForm';
import { ankiFetcher, AnkiParams } from './ankiFetcher';

export const getAllDecksNames = async () => {
  return await ankiFetcher<string[]>('deckNames', 6);
};

export const getAllAnkiTags = async () => {
  return await ankiFetcher<string[]>('getTags', 6);
};

export const createAnkiCard = async (formData: CreateCardFormData) => {
  const { answer, deck, question, tags } = formData;
  const params: AnkiParams = {
    note: {
      fields: {
        Front: question,
        Back: answer,
      },
      deckName: deck,
      tags: tags,
      modelName: 'Basic',
    },
  };

  return await ankiFetcher<any | null>('addNote', 6, params);
};
