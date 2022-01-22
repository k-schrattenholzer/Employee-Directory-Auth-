import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/ProvideAuth.jsx';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.aud === 'authenticated' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
