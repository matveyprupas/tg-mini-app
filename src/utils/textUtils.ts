export enum LANGUAGE_CODE {
  EN = 'en',
  RU = 'ru',
}

export const getGreetingText = (languageCode: LANGUAGE_CODE) => {
  if(languageCode === LANGUAGE_CODE.RU) {
    return 'Привет, ';
  } else {
    return 'Hello, ';
  }
}

export const getContentText = (languageCode: LANGUAGE_CODE, visits: number | null) => {
  if(languageCode === LANGUAGE_CODE.RU) {
    return `Ты был тут ${visits} раз!`;
  } else {
    return `You have been there ${visits} times!`;
  }
}