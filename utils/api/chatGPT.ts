export const getAnswer = async (question: string): Promise<string> => {
  const response = await fetch('/api/answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });
  return response.json().then((data) => data.answer);
};
