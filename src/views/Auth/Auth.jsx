import styles from './Auth.css'

export default function Auth({ isSigningUp = false }) {
  return (
    <div className={styles.authContainer}>
      <p>BB, you tryin to get authorized?</p>
    </div>
  )
}
