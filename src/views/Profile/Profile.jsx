import { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm.jsx';
import { getProfile } from '../../services/profiles.js';
import { getSession } from '../../services/users.js'

export default function Profile() {
  const [profile, setProfile] = useState(false);
  const session = getSession();

  console.log(session);
  console.log(profile);

  useEffect(async () => {
    try {
      if(!profile){
        console.log('no profile')
      } else {
        const res = await getProfile();
        setProfile(res);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      your perfect profile
      {profile ? <ProfileForm isEditing /> : <ProfileForm />}
    </div>
  );
}
