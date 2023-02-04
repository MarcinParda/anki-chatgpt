import { ankiFetcher } from './ankiFetcher';

export const getAllDecksNames = async () => {
  return await ankiFetcher<string[]>('deckNames', 6);
};

export const getAllAnkiTags = async () => {
  return await ankiFetcher<string[]>('getTags', 6);
};
