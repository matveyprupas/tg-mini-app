import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { StrongText } from './components/StrongText';


// Сделать телеграм веб апп, который:

// - будет работать с телеграм cloud storage и записывать туда количество визитов пользователя.
// - в зависимости от локали пользователя будет выдавать приветствие на русском или английском языке, обращаясь к пользователю по имени и сообщая сколько раз пользователь уже тут был
// - при попытке дебажить - очищать адресную строку и выдавать сообщение, что нельзя подсматривать

function App() {
  const {tg, setVisitCount, getVisitCount, count} = useTelegram();

  // const [countState, setCountState] = useState(count);

  // useEffect(() => {
  //   // setCountState(count);
  // }, [count]);

  const handleInc = () =>  {
    // console.log('handleInc', tg);
    console.log('handleInc', setVisitCount(1));
  }

  const handleDec = () =>  {
    // console.log('handleDec', tg);
    console.log('handleDec', setVisitCount(-1));
  }

  const handleClick = () =>  {
    console.log('handleClick', tg);
    console.log('handleClick', getVisitCount(-1));
  }

  return (
    <div className="App">
      <header>
        <h1>
          Hello, {tg.initDataUnsafe.user.first_name}
        </h1>
      </header>

      <p>You have been there <StrongText>{count}</StrongText> times!</p>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
      <button onClick={handleClick}>GET COUNT</button>
    </div>
  );
}

export default App;
