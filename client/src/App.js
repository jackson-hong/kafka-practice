import './App.css';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
import LandingPage from "./components/views/LandingPage/LandingPage";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
        </Switch>
    </div>
  );
}

export default App;
