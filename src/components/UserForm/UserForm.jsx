import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm.js'

export default function UserForm({ label, onSubmit }) {

  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formState;

    try {
      if( !email || password.length < 8)
        throw new Error("Can't complete your registration without an email, and a password with 8+ characters, pardner.");
        setLoading(true);
        await onSubmit(email, password);
    } catch(error) {
        setLoading(false);
        setFormError(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{label}</legend>
        <section>
          <label htmlFor="email">email
          </label>
          <input 
            type="text"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
            />
        </section>
        <section>
          <label htmlFor="password">password
          </label>
          <input 
            type="text"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
            />
        </section>
        <button type='submit' disabled={loading}>
          {loading ? "checking in the back..." : label}
        </button>
        {formError && <p>{formError}</p> }
      </fieldset>
    </form>
  )
}
