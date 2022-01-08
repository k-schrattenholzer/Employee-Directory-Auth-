import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm/ProfileForm.jsx';
import { getProfile } from '../../services/profiles.js';


export default function Profile() {
  const [profile, setProfile] = useState(false);
  const history = useHistory();
  

  useEffect(async () => {
    try {
        const res = await getProfile();
        setProfile(res);
      } catch (err) {
      console.log(err);
    }
  }, []);

  const handleClick = (e) => {
    history.push('/update-profile')
  }
 
  return (
    <div > 
      <section>
        {profile ? 
          <fieldset>
          <legend>Your Profile</legend>
          <label htmlFor="name">Name</label>
          <p>{profile.name}</p>
          <label htmlFor="birthday">D.O.B</label>
          <p>{profile.birthday}</p>
          <label htmlFor="bio">Bio</label>
          <p>{profile.bio}</p>
          <button onClick = {handleClick}>Update</button>
          </fieldset> : 
        <ProfileForm />}
      </section>
    </div>
  );
}
