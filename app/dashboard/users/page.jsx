import styles from "app/ui/dashboard/users/users.module.css";
import Search from "app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "app/lib/data";

export default async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const users = await fetchUsers(q);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
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
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      className={styles.userImage}
                      src={user.img || "/noavatar.png"}
                      width={40}
                      height={40}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "Active" : "Disabled"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
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
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

// Fake data:
/*
<tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
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
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
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
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
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
*/
