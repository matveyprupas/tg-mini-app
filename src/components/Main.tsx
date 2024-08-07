import { useCloudStorage, useInitData } from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import { Greeting } from './Greeting';
import { Visits } from './Visits';
import { LANGUAGE_CODE } from '../constants/i18n';
import { useTranslation } from 'react-i18next';

export const Main = () => {
  const [initDataUnsafe] = useInitData();
  const currentQueryId = initDataUnsafe?.query_id;
  const {getItem, setItem} = useCloudStorage();
  const [visits, setVisits] = useState<number | null>(null);
  const {i18n} = useTranslation();

  const languageCode: LANGUAGE_CODE = initDataUnsafe?.user?.language_code as LANGUAGE_CODE || LANGUAGE_CODE.EN;
  
  useEffect(() => {
    i18n.changeLanguage(languageCode);
  }, [i18n, languageCode])

  useEffect(() => {
    if(!currentQueryId) return

    getItem('lastQueryId').then(lastQueryId => {

      getItem('visitCount').then(visitCount => {

        if(+visitCount) {
          if(lastQueryId !== currentQueryId) {
            setVisits(+visitCount + 1);
            setItem('visitCount', (+visitCount + 1).toString())
            setItem('lastQueryId', currentQueryId)
          } else {
            setVisits(+visitCount)
          } 
        } else {
          setVisits(1);
          setItem('visitCount', (1).toString());
          setItem('lastQueryId', currentQueryId)
        }

      });
    })
  }, [currentQueryId, getItem, setItem]);

  return (
    <div className="flex flex-col gap-4 items-center">
      <header className="App-header font-bold">
        <Greeting>{initDataUnsafe?.user?.first_name}</Greeting>
      </header>
      {visits && <Visits visits={visits} />}
    </div>
  );
}