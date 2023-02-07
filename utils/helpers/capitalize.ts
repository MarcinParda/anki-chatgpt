export const capitalize = (stringToCapitalize: string) => {
  const firstLetter = stringToCapitalize.at(0);
  if (!firstLetter) {
    throw new Error('String is empty');
  }
  return firstLetter.toUpperCase() + stringToCapitalize.slice(1);
};
