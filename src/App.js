import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
  const {tg} = useTelegram();
  
  const handleClick = () =>  {
    console.log('handleClick', tg)
  }
  return (
    <div className="App">
      <header>Hello {tg.initDataUnsafe.user.first_name}</header>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
