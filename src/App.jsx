import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from "./views/Home/Home.jsx";
import Auth from "./views/Auth/Auth.jsx";

export default function App() {
  return (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Auth />
            </Route>
            <Route path='/register'>
              <Auth />
            </Route>
          </Switch>
        </Router>
);
}
