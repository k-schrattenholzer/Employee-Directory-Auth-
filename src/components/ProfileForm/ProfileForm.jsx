import { useState } from 'react';
import { useUser } from '../../context/ProvideAuth.jsx';
import { createProfile, updateProfile } from '../../services/profiles.js';
import { useForm } from '../../hooks/useForm.js'

export default function ProfileForm({ isEditing = false }) {
  const { user } = useUser();

  const { formState, formError, handleFormChange, setFormError } = useForm({
    name: '',
    email: user.email,
    bio: '',
    birthday: '',
  });

  console.log(formState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, bio, birthday } = formState;

    try {
      if(isEditing) {
        updateProfile({ name, email, bio, birthday })       
      } else {
        await createProfile({ name, email, bio, birthday });
        debugger;
      }
    } catch (error) {
      setFormError(error);
    }
  };

  return (
    <div>
      {/* {formError && <p>{formError}</p> } */}
      <fieldset>
        <legend>{isEditing ? 'Update Your Profile' : 'Set Up Your Profile'}</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={formState.name}
            required
            onChange={handleFormChange}
          />

          <label htmlFor="email">Email</label>
          <p>{user.email}</p>

          <label htmlFor="birthday">Birthday</label>
          <input
            name="birthday"
            type='date'
            value={formState.birthday}
            required
            onChange={handleFormChange}
          />

          <label htmlFor="bio">Tell us your secrets.</label>
          <textarea
            name="bio"
            id="bio"
            value={formState.bio}
            onChange={handleFormChange}
          />

          <button type='submit'>Done-zo</button>
        </form>
      </fieldset>
    </div>
  );
}
