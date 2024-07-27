import Image from "next/image";
import Link from "next/link";
import Pagination from "app/ui/dashboard/pagination/pagination";
import Search from "app/ui/dashboard/search/search";
import styles from "app/ui/dashboard/products/products.module.css";

export default function ProductsPage() {

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product..." />
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add new product</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Created At</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/noproduct.jpg" width={40} height={40} />
                  Iphone
                </div>
              </td>
              <td>Smartphone</td>
              <td>1999.00$</td>
              <td>2021-09-01</td>
              <td>45678</td>
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
        <Pagination />
      </div>
    );
}
