import { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;


export const useTelegram = () => {
  // const [count, setCount] = useState(null);

  // useEffect(() => {
  //   tg.CloudStorage.getItem('visitCount', (error, value) => {
  //     console.log('useEffect callback start', error, value);
  //     if(error) throw error;

  //     console.log('useEffect callback end', error, value);

  //     if(value) {
  //       setCount(parseInt(value));
  //     } else {
  //       setCount(0);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   if(count === null) return;
  //   tg.CloudStorage.setItem('visitCount', count);
  // }, [count]);

  // const getVisitCount = () => {
  //   return count;
  // }

  // const setVisitCount = (amount) => {
  //   setCount(prev => prev + amount);
  // }

  return ({
    tg,
    // getVisitCount,
    // setVisitCount
  })
}