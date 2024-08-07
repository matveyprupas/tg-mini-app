import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;


export const useTelegram = () => {
  const currentQueryId = tg.initDataUnsafe.query_id;
  const [count, setCount] = useState(null);
  const [lastQueryId, setLastQueryId] = useState(null);

  useEffect(() => {
    tg.CloudStorage.getItem('lastQueryId', (error, lastQueryIdValue) => {
      if(error) throw error;

      console.log('lastQueryId', error, lastQueryIdValue, currentQueryId, lastQueryIdValue !== currentQueryId);

      if(!lastQueryIdValue) {
        setLastQueryId(currentQueryId);
      } else if(currentQueryId !== lastQueryIdValue) {
        setLastQueryId(currentQueryId);
        setCount(prevCount => prevCount + 1);
      }
    });
  });

  useEffect(() => {
    tg.CloudStorage.getItem('visitCount', (error, countValue) => {
      if(error) throw error;

      console.log('visitCount', error, countValue);

      if(!countValue) {
        setCount(1);
      } else {
        setCount(parseInt(countValue));
      }
    });
  }, []);

  useEffect(() => {
    tg.CloudStorage.setItem('visitCount', count);
  }, [count]);
  useEffect(() => {
    tg.CloudStorage.setItem('lastQueryId', lastQueryId);
  }, [lastQueryId]);

  const getVisitCount = () => {
    return count;
  }

  const removeLastQueryId = () => {
    tg.CloudStorage.removeItem('lastQueryId');
  }

  return ({
    tg,
    getVisitCount,
    removeLastQueryId
  })
}