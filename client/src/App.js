import './App.css';
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Auth(LoginPage, false)} />
        </Switch>
    </div>
  );
}

export default App;
