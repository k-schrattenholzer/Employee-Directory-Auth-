import { useHistory } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm.jsx'
import { useUser } from '../../context/UserContext.jsx';
import { signInUser, signUpUser } from '../../services/users.js';
import styles from './Auth.css'

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleSubmit = async (email, password) => {
    try {
      if(isSigningUp) {
        const user = await signUpUser(email, password);
        setUser(user);
        console.log(user);
        history.replace('/confirm-email');
      } else {
        const user = await signInUser(email, password);
        setUser(user);
        history.replace('/profile')
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <div className={styles.authContainer}>
      <h3>{isSigningUp ? 'Velkommen' : 'Greetings & Salutations, Employee' }</h3>
      <UserForm onSubmit={handleSubmit} label={isSigningUp ? 'Register' : 'Login' }/>
    </div>
  )
}
