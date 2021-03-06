import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Header from './components/Layout/Header.jsx';
import Home from './views/Home/Home.jsx';
import Auth from './views/Auth/Auth.jsx';
import ConfirmEmail from './views/Auth/ConfirmEmail.jsx';
import Profile from './views/Profile/Profile.jsx';
import { UserProvider } from './context/ProvideAuth.jsx';
import ProfileForm from './components/ProfileForm/ProfileForm.jsx';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth isSigningUp />
          </Route>

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/update-profile">
            <ProfileForm isEditing />
          </PrivateRoute>
          <PrivateRoute path="/confirm-email">
            <ConfirmEmail />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserProvider>
  );
}
