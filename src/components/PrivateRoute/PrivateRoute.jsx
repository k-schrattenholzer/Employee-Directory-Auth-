import { Redirect, Route } from "react-router-dom";


export default function PrivateRoute({children, ...routeProps }) {
  let loggedIn = false;
  const user = loggedIn ? {id: 6, email:'ktschr11@gmail.com' } : null;

  return (
  <Route {...routeProps}>
     (user ? {children} : <Redirect to='/login' />))
  </Route>
  )
}
