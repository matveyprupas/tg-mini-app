const LANGUAGE_CODE = {
  en: 'en',
  ru: 'ru',
}

export const getGreetingText = (languageCode) => {
  if(languageCode === LANGUAGE_CODE.ru) {
    return 'Привет, ';
  } else {
    return 'Hello, ';
  }
}