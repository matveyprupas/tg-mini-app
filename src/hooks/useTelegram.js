import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;


export const useTelegram = () => {
  const currentQueryId = tg.initDataUnsafe.query_id;
  const [count, setCount] = useState(null);
  const [lastQueryId, setLastQueryId] = useState(null);

  // INITIAL CLOUD visitCount
  useEffect(() => {
    tg.CloudStorage.getItem('visitCount', (error, countValue) => {
      if(error) throw error;
      console.log('INITIAL visitCount', error, countValue);

      if(!countValue) {
        setCount(1);
      } else {
        setCount(parseInt(countValue));
      }
    });
  }, []);

  // INITIAL CLOUD lastQueryId
  useEffect(() => {    
    tg.CloudStorage.getItem('lastQueryId', (error, lastQueryIdValue) => {
      if(error) throw error;
      console.log('INITIAL lastQueryId', error, lastQueryIdValue);

      if (!lastQueryIdValue) {
        setLastQueryId(currentQueryId)
      } else {
        setLastQueryId(lastQueryIdValue)
      }
    });
  }, [currentQueryId]);

  // CHECK if currentQueryId !== lastQueryIdValue
  useEffect(() => {
    tg.CloudStorage.getItem('lastQueryId', (error, lastQueryIdValue) => {
      if(error) throw error;

      console.log('CHECK lastQueryId', error, lastQueryIdValue, !lastQueryIdValue, currentQueryId, lastQueryIdValue !== currentQueryId);

      if(currentQueryId !== lastQueryIdValue) {
        setLastQueryId(currentQueryId);
        setCount(prevCount => prevCount + 1);
      }
    });
  }, [currentQueryId]);


  // UPDATE CLOUD visitCount
  useEffect(() => {
    if(count === null) return;
    
    console.log('UPDATE visitCount', count);

    tg.CloudStorage.setItem('visitCount', count);
  }, [count]);

  // UPDATE CLOUD lastQueryId
  useEffect(() => {
    if(lastQueryId === null) return;
    
    console.log('UPDATE lastQueryId', lastQueryId);

    tg.CloudStorage.setItem('lastQueryId', lastQueryId);
  }, [lastQueryId]);

  const getVisitCount = () => {
    return count;
  }

  const getLastQueryId = () => {
    return lastQueryId;
  }

  const removeLastQueryId = () => {
    tg.CloudStorage.setItem('visitCount', 1);
    tg.CloudStorage.setItem('lastQueryId', '');
  }

  return ({
    tg,
    getVisitCount,
    getLastQueryId,
    removeLastQueryId
  })
}