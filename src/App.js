// import { useEffect, useState } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { StrongText } from './components/StrongText';
import { Button } from './components/Button';


// Сделать телеграм веб апп, который:

// - будет работать с телеграм cloud storage и записывать туда количество визитов пользователя.
// - в зависимости от локали пользователя будет выдавать приветствие на русском или английском языке, обращаясь к пользователю по имени и сообщая сколько раз пользователь уже тут был
// - при попытке дебажить - очищать адресную строку и выдавать сообщение, что нельзя подсматривать

function App() {
  const {tg, getVisitCount, setVisitCount} = useTelegram();


  const handleInc = () =>  {
    setVisitCount(1)
  }

  const handleDec = () =>  {
    setVisitCount(-1)
  }

  const handleClick = () =>  {
    console.log('handleClick', tg);
    console.log('handleClick', getVisitCount());
  }

  return (
    <div className="text-center">
      <header>
        <h1 className='text-xl font-bold'>
          Hello, {tg.initDataUnsafe.user.first_name}
        </h1>
      </header>
      
      <main>
        <p>You have been there <StrongText>{getVisitCount()}</StrongText> times!</p>
        <div className='flex flex-col gap-4 items-center'>
          <Button onClick={handleInc}>Inc</Button>
          <Button onClick={handleDec}>Dec</Button>
          <Button onClick={handleClick}>GET COUNT</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
