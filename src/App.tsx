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

    const eventType = 'web_app_invoke_custom_method';
    const eventData: any = {
      req_id: 'TelegramWebviewProxy',
      method: 'devtools',
      params: {
        param1: 'param1',
        param2: 'param2'
      }
    };

    (window as any).TelegramWebviewProxy.postEvent(eventType, eventData);

    (window as any).external.notify(JSON.stringify({eventType: eventType, eventData: eventData}));

    window.parent.postMessage(JSON.stringify({eventType: eventType, eventData: eventData}), '*');


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
