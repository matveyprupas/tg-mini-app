import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;


export const useTelegram = () => {
  const currentQueryId = tg.initDataUnsafe.query_id;
  const [count, setCount] = useState(null);
  // const [lastQueryId, setLastQueryId] = useState(null);

  useEffect(() => {
    tg.CloudStorage.getItem('visitCount', (error, countValue) => {
      if(error) throw error;

      console.log('visitCount', error, countValue);

      // if(countValue) {
      //   setCount(parseInt(countValue));
      // }

      tg.CloudStorage.getItem('lastQueryId', (error, lastQueryIdValue) => {
        if(error) throw error;

        console.log('lastQueryId', error, lastQueryIdValue, currentQueryId, lastQueryIdValue !== currentQueryId);

        if(!lastQueryIdValue) {
          setCount(1);
          tg.CloudStorage.setItem('visitCount', count);
          tg.CloudStorage.setItem('lastQueryIdValue', currentQueryId);
        } else if(currentQueryId !== lastQueryIdValue) {
          // setLastQueryId(currentQueryId);
          setCount(prevCount => prevCount + 1);
          tg.CloudStorage.setItem('visitCount', count);
          tg.CloudStorage.setItem('lastQueryIdValue', currentQueryId);
        }
      });
    });
  });

  useEffect(() => {
    tg.CloudStorage.getItem('visitCount', (error, countValue) => {
      if(error) throw error;

      console.log('visitCount', error, countValue);

      if(countValue) {
        setCount(parseInt(countValue));
      } else {
        setCount(1);
      }
    })
  }, []);

  const getVisitCount = () => {
    return count;
  }

  // const setVisitCount = (amount) => {
  //   setCount(prev => prev + amount);
  // }

  return ({
    tg,
    getVisitCount,
    // setVisitCount
  })
}