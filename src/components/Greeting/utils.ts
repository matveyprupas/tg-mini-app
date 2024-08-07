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