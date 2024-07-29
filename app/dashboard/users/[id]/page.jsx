import styles from "app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "app/lib/data";

export default async function SingleUserPage({ params }) {
  const user = await fetchUser(params.id);

  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.imgContainer}
            src={user.img || "/noavatar.png"}
            alt="avatar"
            fill
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type="text"
            value={user.username || "No username"}
            name="username"
            required
          />
          <input
            type="email"
            value={user.email || "email"}
            name="email"
            required
          />
          <input
            type="password"
            value="password"
            name="password"
            required
          />
          <input type="phone" value="phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="address" placeholder="address" name="address" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
