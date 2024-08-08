import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Main } from "./components/Main";
import { Forbidden } from "./components/Forbidden";
import { useState } from "react";
import { addListener } from 'devtools-detector';

function App() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  addListener(
    (isOpen) => {
      setIsDevToolsOpen(isOpen)
    }
  );
  // launch();

  const handleClick = () => {
    console.log((window as any).Telegram.WebApp);
  }
  
  return (
    <Router>
      <div>
        <button onClick={handleClick}>Click</button>
        <Switch>
          <Route path="/forbidden">
            {!isDevToolsOpen ? 
              <Redirect
                to={{
                  pathname: "/",
                }}
              /> : 
              <Forbidden />}
          </Route>
          <Route path="/">
            {isDevToolsOpen ? 
              <Redirect
              to={{
                pathname: "/forbidden",
              }}
            />  : 
            <Main />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
