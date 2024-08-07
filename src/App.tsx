import { useCloudStorage, useInitData } from '@vkruglikov/react-telegram-web-app';
import React, { useEffect, useState } from 'react';
import { Greeting } from './components/Greeting/Greeting';

function App() {
  const [initDataUnsafe] = useInitData();

  const {getKeys} = useCloudStorage();
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    getKeys().then(response => setKeys(response));
  }, [getKeys]);

  return (
    <div className="App">
      <header className="App-header font-bold">
        <Greeting>{initDataUnsafe?.user?.first_name}</Greeting>
      </header>

      {keys.map(el => <span key={el}>{el}</span>)}
    </div>
  );
}

export default App;
