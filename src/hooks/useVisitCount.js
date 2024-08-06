import { useEffect, useState } from "react";
import { useTelegram } from "./useTelegram";


export const useVisitCount = () => {
  const {tg} = useTelegram();
  const userId = tg.initDataUnsafe.user.id
  const [count, setCount] = useState(null);
  const [visits, setVisits] = useState(null);
  // visitCount = {
  //   [id: string]: count: number
  // }

  useEffect(() => {
    tg.CloudStorage.setItem('visits', {
      userId: 0
    });
  }, [userId, tg.CloudStorage]);

  useEffect(() => {
    if(count === null) return;
    
    tg.CloudStorage.getItem('visits', (error, value) => {
      if(error) throw error;

      setVisits(value);

      tg.CloudStorage.setItem('visits', {
        ...value,
        userId: count,
      });
    });
    
  }, [count, tg.CloudStorage]);

  const getVisits = () => {
    return JSON.stringify(visits);
  }

  const getVisitCount = () => {
    return count;
  }

  const setVisitCount = (amount) => {
    setCount(prev => prev + amount);
  }

  return ({
    tg,
    getVisitCount,
    setVisitCount,
    getVisits
  })
}