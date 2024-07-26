import Card from "app/ui/dashboard/card/card.jsx";
import styles from "app/ui/dashboard/dashboard.module.css";
import Transaction from "app/ui/dashboard/transaction/transaction";
import Chart from "app/ui/dashboard/chart/chart";
import Rightbar from "app/ui/dashboard/rightbar/rightbar";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}
