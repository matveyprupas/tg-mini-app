import { useCloudStorage, useInitData } from '@vkruglikov/react-telegram-web-app';
import React, { useEffect, useState } from 'react';
import { Greeting } from './components/Greeting/Greeting';

function App() {
  const [initDataUnsafe] = useInitData();
  const currentQueryId = initDataUnsafe?.query_id;
  const {getKeys, getItems, getItem, setItem} = useCloudStorage();
  const [keys, setKeys] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [visits, setVisits] = useState<number>(0);

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

  useEffect(() => {
    getKeys().then(keys => {
      setKeys(keys)
      getItems(keys).then(items => setItems(items));
    });
  }, [getKeys, getItems]);

  console.log('App render: ', keys, items);

  return (
    <div className="App flex flex-col gap-4 items-center">
      <header className="App-header font-bold">
        <Greeting>{initDataUnsafe?.user?.first_name}</Greeting>
      </header>
      <p>You have been there ${visits} times!</p>

      <h3>Keys</h3>
      {keys.length && keys.map(el => <p key={el}>{el}</p>)}
      
      {/* <h3>Items</h3>
      {items.length && items.map(el => <p key={el}>{el}</p>)} */}
    </div>
  );
}

export default App;
