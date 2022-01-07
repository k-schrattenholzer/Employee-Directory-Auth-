import { useState } from "react";
import { useUser } from "../../context/ProvideAuth.jsx";
import { createProfile } from "../../services/profiles.js";

export default function CreateProfile() {
  const user = useUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [bio, setBio] = useState();

  const handleSubmit = (e) => {
    createProfile({name, email, bio, birthday})
  }

    return (
      <div>
        <fieldset>
          <legend>Set Up Your Employee Profile</legend>
          <form onSubmit={handleSubmit}>
            <label 
            htmlFor="name">Name</label>
            <input 
              name='name' 
              value={name} 
              required 
              onChange={(e) => setName(e.target.value) } />

            <label 
            htmlFor="email">Email</label>
            <input 
              name='email' 
              value={email} 
              required 
              onChange={(e) => setEmail(e.target.value) } />

            <label 
              htmlFor="birthday">
              Birthday</label>
            <input 
              name='birthday' 
              value={birthday} 
              required 
              onChange={(e) => setBirthday(e.target.value) } />

              <label htmlFor="bio">Tell us your secrets.</label>
              <textarea name="bio" id="bio" onChange={(e) => setBio(e.target.value)}/>

              <button>Finito!</button>
          </form>
        </fieldset>
      </div>
    )
}
