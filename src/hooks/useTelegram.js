import { useState } from "react";

const tg = window.Telegram.WebApp;
tg.CloudStorage.setItem('visitCount', 666);


export const useTelegram = () => {
  const [count, setCount] = useState(0);

  const getVisitCount = () => {
    tg.CloudStorage.getItem('visitCount', (error, value) => {
      console.log('getVisitCount callback start', error, value);
      if(error) throw error;

      console.log('getVisitCount callback end', error, value);
      setCount(value);
    });
  }

  const setVisitCount = (amount) => {
    tg.CloudStorage.setItem('visitCount', count + amount);
    getVisitCount();
  }

  return ({
    tg,
    getVisitCount,
    count,
    setVisitCount
  })
}