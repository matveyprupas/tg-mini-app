import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;


export const useTelegram = () => {
  const currentQueryId = tg.initDataUnsafe.query_id;
  const [count, setCount] = useState(null);
  // const [lastQueryId, setLastQueryId] = useState(null);

  // INITIAL CLOUD ITEMS
  useEffect(() => {
    tg.CloudStorage.setItem('visitCount', 1);
    tg.CloudStorage.setItem('lastQueryId', '');
  }, []);

  useEffect(() => {
    tg.CloudStorage.getItem('lastQueryId', (error, lastQueryIdValue) => {
      if(error) throw error;

      console.log('lastQueryId', error, lastQueryIdValue, !lastQueryIdValue, currentQueryId, lastQueryIdValue !== currentQueryId);

      if(currentQueryId !== lastQueryIdValue) {
        tg.CloudStorage.setItem('lastQueryId', currentQueryId);
        setCount(prevCount => prevCount + 1);
      }
    });
  }, [currentQueryId]);



  // useEffect(() => {
  //   tg.CloudStorage.setItem('visitCount', count);
  // }, [count]);

  // useEffect(() => {
  //   tg.CloudStorage.setItem('lastQueryId', lastQueryId);
  // }, [lastQueryId]);

  const getVisitCount = () => {
    return count;
  }

  const removeLastQueryId = () => {
    tg.CloudStorage.setItem('visitCount', 1);
    tg.CloudStorage.setItem('lastQueryId', '');
  }

  return ({
    tg,
    getVisitCount,
    removeLastQueryId
  })
}