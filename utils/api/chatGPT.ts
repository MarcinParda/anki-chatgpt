export const getAnswer = async (question: string): Promise<string> => {
  const response = await fetch('/api/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: `Answer to the following question:${question}`,
    }),
  });
  return response.json().then((data) => data.answer);
};

export const getLanguages = async (): Promise<string> => {
  const response = await fetch('/api/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: 'give me a list of all world languages as string array',
      temperature: 0,
      max_tokens: 1000,
    }),
  });
  return response.json().then((data) => data.answer);
};
