import { useCloudStorage, useInitData } from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import { Greeting } from './components/Greeting/Greeting';

function App() {
  const [initDataUnsafe] = useInitData();
  const currentQueryId = initDataUnsafe?.query_id;
  const {getItem, setItem} = useCloudStorage();
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    if(!currentQueryId) return

    getItem('lastQueryId').then(lastQueryId => {

      getItem('visitCount').then(visitCount => {

        console.log('lastQueryId:', lastQueryId)
        console.log('visitCount:', visitCount)
        console.log('+visitCount:', +visitCount)
        console.log('currentQueryId:', currentQueryId)
        console.log('lastQueryId !== currentQueryId:', lastQueryId !== currentQueryId)

        if(+visitCount) {
          if(lastQueryId !== currentQueryId) {
            setVisits(+visitCount + 1);
            setItem('visitCount', (+visitCount + 1).toString())
            setItem('lastQueryId', currentQueryId)
          } else {
            setVisits(+visitCount)
          } 
        } else {
          setVisits(1);
          setItem('visitCount', (1).toString())
        }

      });
    })
  }, [currentQueryId, getItem, setItem]);

  return (
    <div className="App flex flex-col gap-4 items-center">
      <header className="App-header font-bold">
        <Greeting>{initDataUnsafe?.user?.first_name}</Greeting>
      </header>
      <p>You have been there {visits} times!</p>
    </div>
  );
}

export default App;
