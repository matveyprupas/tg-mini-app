import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


// Сделать телеграм веб апп, который:

// - будет работать с телеграм cloud storage и записывать туда количество визитов пользователя.
// - в зависимости от локали пользователя будет выдавать приветствие на русском или английском языке, обращаясь к пользователю по имени и сообщая сколько раз пользователь уже тут был
// - при попытке дебажить - очищать адресную строку и выдавать сообщение, что нельзя подсматривать

function App() {
  const {tg, setVisitCount, getVisitCount} = useTelegram();

  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const count = await getVisitCount();
      setCount(count);
    })();
  });

  const handleClick = () =>  {
    console.log('handleClick', tg);
    console.log('handleClick', setVisitCount());
  }
  return (
    <div className="App">
      <header>
        <h1>
          Hello, {tg.initDataUnsafe.user.first_name}
        </h1>
      </header>

      <p>You have been there {count} times!</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
