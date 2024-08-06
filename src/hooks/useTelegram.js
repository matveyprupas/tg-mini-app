import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;
// tg.CloudStorage.setItem('visitCount', 0);


export const useTelegram = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    tg.CloudStorage.getItem('visitCount', (error, value) => {
      console.log('useEffect callback start', error, value);
      if(error) throw error;

      console.log('useEffect callback end', error, value);

      if(value) {
        setCount(value);
      }
    });
  }, []);

  useEffect(() => {
    tg.CloudStorage.setItem('visitCount', count);
  }, [count]);

  const getVisitCount = () => {
    return count;
    // tg.CloudStorage.getItem('visitCount', (error, value) => {
    //   console.log('getVisitCount callback start', error, value);
    //   if(error) throw error;

    //   console.log('getVisitCount callback end', error, value);
    //   setCount(value);
    // });
  }

  const setVisitCount = (amount) => {
    setCount(prev => prev + amount);
    // tg.CloudStorage.setItem('visitCount', count + amount);
    // getVisitCount();
  }

  return ({
    tg,
    getVisitCount,
    count,
    setVisitCount
  })
}