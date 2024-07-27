import styles from "./pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <IoIosArrowBack />
        Previous
      </button>
      <button className={styles.button}>
        Next
        <IoIosArrowForward />
      </button>
    </div>
  );
}
