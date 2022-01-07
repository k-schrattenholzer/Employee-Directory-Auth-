import useState from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm.jsx';
import { useUser } from '../../context/ProvideAuth.jsx';

export default function Profile() {
  const { user } = useUser();
  console.log(user.aud, user.email);
  const [profile, setProfile] = useState({name: '', birthday:'', email:user.email, bio:'' });
  return (
    <div>
      your perfect profile
      ad
      <ProfileForm />
    </div>
  );
}
