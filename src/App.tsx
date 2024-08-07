import { useCloudStorage, useInitData } from '@vkruglikov/react-telegram-web-app';
import React, { useEffect, useState } from 'react';
import { Greeting } from './components/Greeting/Greeting';

function App() {
  const [initDataUnsafe] = useInitData();

  const {getKeys, getItems} = useCloudStorage();
  const [keys, setKeys] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);

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

      <h3>Keys</h3>
      {keys.length && keys.map(el => <p key={el}>{el}</p>)}
      
      <h3>Items</h3>
      {items.length && items.map(el => <p key={el}>{el}</p>)}
    </div>
  );
}

export default App;
