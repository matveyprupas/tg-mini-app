import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { Main } from "./components/Main";
import { Forbidden } from "./components/Forbidden";
import { useState } from "react";

function App() {

  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  const handleSwitch = () => {
    setIsDevToolsOpen(prev => !prev);
  }
  
  return (
    <Router>
      <div>

        <button className="bg-gray-100 border rounded-lg hover:bg-gray-300" onClick={handleSwitch}>Toggle</button>

        <Switch>
          <Route path="/forbidden">
            <Forbidden />
          </Route>
          <Route path="/">
            {isDevToolsOpen ? <Redirect
            to={{
              pathname: "/forbidden",
            }}
          />  : <Main />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
