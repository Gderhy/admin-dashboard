import styles from "app/ui/login/login.module.css";


export default function Login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" required />
        <input type="password" placeholder="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
};
