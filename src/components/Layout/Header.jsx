import { useHistory } from "react-router-dom";
import { useUser } from "../../context/ProvideAuth.jsx"

import { signOutUser } from "../../services/users.js";

export default function Header() {

  const { user, setUser } = useUser();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    setUser({});
    history.push('/login')
  }

  return (
    <div>
      <header>
        <p>{user?.email ? `Signed in as ${user?.email}` : 'Not Signed In' }</p>
        {user?.email ? <button onClick={handleSignOut}>Sign Out</button> : '' }

      </header>
    </div>
  )
}
