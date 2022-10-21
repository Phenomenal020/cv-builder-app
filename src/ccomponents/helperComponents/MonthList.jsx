import months from "./months";
import styles from "../../styles/helpers.module.css";

const MonthList = ({ setSelectedMonth }) => {
  return (
    <div className={styles.monthWrapper}>
      {months.map(month => {
        return (
          <div
            key={Math.random() * 1000}
            onClick={month => setSelectedMonth(month.target.textContent)}
            className={styles.monthItem}
          >
            {month.month}
          </div>
        );
      })}
    </div>
  );
};

export default MonthList;