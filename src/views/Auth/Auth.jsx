import UserForm from '../../components/UserForm/UserForm.jsx'
import styles from './Auth.css'

export default function Auth({ isSigningUp = false }) {
  const handleSubmit = () => {

  }
  return (
    <div className={styles.authContainer}>
      <h3>{isSigningUp ? 'Velkommen' : 'Greetings & Salutations, Employee' }</h3>
      <UserForm onSubmit={handleSubmit} label={isSigningUp ? 'Register' : 'Login' }/>
    </div>
  )
}
