import { useEffect, useState } from "react";
import { useTelegram } from "./useTelegram";


export const useVisitCount = () => {
  const {tg} = useTelegram();
  const userId = tg.initDataUnsafe.user.id
  const [count, setCount] = useState(null);
  // visitCount = {
  //   [id: string]: count: number
  // }

  useEffect(() => {
    tg.CloudStorage.getItem('visits', (error, value) => {
      console.log('useEffect callback start', error, value);
      if(error) throw error;

      console.log('useEffect callback end', error, value);

      setCount(value[userId] ? value[userId] : 0)
    });
  }, [userId, tg.CloudStorage]);

  useEffect(() => {
    if(count === null) return;
    
    tg.CloudStorage.getItem('visits', (error, value) => {
      if(error) throw error;

      tg.CloudStorage.setItem('visits', {
        ...value,
        userId: count,
      });
    });
    
  }, [count, tg.CloudStorage]);

  const getVisitCount = () => {
    return count;
  }

  const setVisitCount = (amount) => {
    setCount(prev => prev + amount);
  }

  return ({
    tg,
    getVisitCount,
    setVisitCount
  })
}