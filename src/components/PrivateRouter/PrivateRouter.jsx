import { Route } from "react-router-dom";


export default function PrivateRouter({children, ...routeProps }) {
  let loggedIn = false;
  const user = loggedIn ? {id: 6, email:'ktschr11@gmail.com' } : null;
  
  return (
   <Route {...routeProps} >
     {children}
   </Route>
  )
}
