import { ANKI_CONNECT_URL } from '@/consts/api';

export const ankiFetcher = <ResponseData>(action: string, version: number, params = {}): Promise<ResponseData> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('error', () => reject('failed to issue request'));
    xhr.addEventListener('load', () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (Object.getOwnPropertyNames(response).length != 2) {
          throw 'response has an unexpected number of fields';
        }
        if (!response.hasOwnProperty('error')) {
          throw 'response is missing required error field';
        }
        if (!response.hasOwnProperty('result')) {
          throw 'response is missing required result field';
        }
        if (response.error) {
          throw response.error;
        }
        resolve(response.result as ResponseData);
      } catch (e) {
        reject(e);
      }
    });

    xhr.open('POST', ANKI_CONNECT_URL);
    xhr.send(JSON.stringify({ action, version, params }));
  });
};
