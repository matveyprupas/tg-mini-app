const tg = window.Telegram.WebApp;

export const useTelegram = () => {

  const getVisitCount = async () => {
    console.log('getVisitCount start');
    let res = null;

    tg.CloudStorage.getItem('visitCount', (error, value) => {
      console.log('getVisitCount callback start');
      if(error) throw error;

      console.log('getVisitCount callback end');
      res = value;
    });

    console.log('getVisitCount end');
    return res;
  }

  const setVisitCount = async () => {
    console.log('setVisitCount start');

    const count = await getVisitCount();
    tg.CloudStorage.setItem('visitCount', count + 1);

    console.log('setVisitCount end count', count);
  }

  return ({
    tg,
    getVisitCount,
    setVisitCount
  })
}