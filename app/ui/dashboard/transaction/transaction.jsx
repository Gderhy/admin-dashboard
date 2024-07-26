import styles from "./transaction.module.css";
import Image from "next/image";

export default function Transaction() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div className={styles.user}>
              <td>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </td>
            </div>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>12/12/2021</td>
            <td>$100</td>
          </tr>
          <tr>
            <div className={styles.user}>
              <td>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </td>
            </div>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12/12/2021</td>
            <td>$100</td>
          </tr>
          <tr>
            <div className={styles.user}>
              <td>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </td>
            </div>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>12/12/2021</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
