import { useState } from "react";

const tg = window.Telegram.WebApp;
tg.CloudStorage.setItem('visitCount', 666);


export const useTelegram = () => {
  const [count, setCount] = useState(0);

  const getVisitCount = () => {
    console.log('getVisitCount start');
    // let res = null;

    tg.CloudStorage.getItem('visitCount', (error, value) => {
      console.log('getVisitCount callback start', error, value);
      if(error) throw error;

      console.log('getVisitCount callback end', error, value);
      setCount(value);
    });

    // console.log('getVisitCount end');
    // return res;
  }

  // const setVisitCount = async () => {
  //   console.log('setVisitCount start');

  //   const count = await getVisitCount();
  //   tg.CloudStorage.setItem('visitCount', count + 1);

  //   console.log('setVisitCount end count', count);
  // }

  return ({
    tg,
    getVisitCount,
    count
    // setVisitCount
  })
}