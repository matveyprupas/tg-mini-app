import './App.css';

const tg = window.Telegram.WebApp.initDataUnsafe;

function App() {
  const handleClick = () =>  {
    console.log('handleClick', tg)
  }
  return (
    <div className="App">
      <header>Header</header>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
