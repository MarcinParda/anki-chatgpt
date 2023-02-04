import { ankiFetcher } from './ankiFetcher';

export const getAllDecksNames = async () => {
  return await ankiFetcher('getNames', 6);
};

export const getAllAnkiTags = async () => {
  return await ankiFetcher('getTags', 6);
};
