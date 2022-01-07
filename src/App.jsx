import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Home from './views/Home/Home.jsx';
import Auth from './views/Auth/Auth.jsx';
import ConfirmEmail from './views/Auth/ConfirmEmail.jsx';
import Profile from './views/Profile/Profile.jsx';
import { UserProvider } from './context/ProvideAuth.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/confirm-email">
            <ConfirmEmail />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}
