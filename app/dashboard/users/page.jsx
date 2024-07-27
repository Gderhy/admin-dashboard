import styles from "app/ui/dashboard/users/users.module.css";   
import Search from "app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";

export default function UsersPage() {

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..." />
          <Link href="">
            <button className={styles.addButton}>Add new user</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" width={40} height={40} />
                  John Doe
                </div>
              </td>
              <td>example@email.com</td>
              <td>2021-09-01</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" width={40} height={40} />
                  John Doe
                </div>
              </td>
              <td>example@email.com</td>
              <td>2021-09-01</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" width={40} height={40} />
                  John Doe
                </div>
              </td>
              <td>example@email.com</td>
              <td>2021-09-01</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
