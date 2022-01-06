import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from "./views/Home/Home.jsx";
import Auth from "./views/Auth/Auth.jsx";
import Profile from "./views/Profile/Profile.jsx";

export default function App() {
  return (
        <Router>
          <Switch>
            <Route path='/register'>
              <Auth isSigningUp />
            </Route>
            <Route path='/login'>
              <Auth />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
);
}
