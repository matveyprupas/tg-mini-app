import { useCloudStorage } from '@vkruglikov/react-telegram-web-app';
import React, { useEffect, useState } from 'react';

function App() {
  const {getKeys} = useCloudStorage();
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    getKeys().then(response => setKeys(response));
  }, [getKeys]);

  return (
    <div className="App">
      <header className="App-header font-bold">
        Hello World
      </header>

      {keys.map(el => <span key={el}>{el}</span>)}
    </div>
  );
}

export default App;
