import useState from 'react';
import CreateProfile from '../../components/CreateProfile/CreateProfile.jsx'
import { useUser } from '../../context/ProvideAuth.jsx';

export default function Profile() {
  const { user } = useUser();
  console.log(user.aud, user.email);

  return (
    <div>
      your perfect profile
      ad
      <CreateProfile />
    </div>
  );
}
