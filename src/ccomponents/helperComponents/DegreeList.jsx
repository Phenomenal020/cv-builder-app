import degrees from "./degrees";
import styles from "../../static/styles/helpers.module.css";

const DegreeList = ({ setSelectedDegree }) => {
  return (
    <div className={styles.degreeWrapper}>
      {degrees.map(degree => {
        return (
          <div
            key={Math.random() * 1000}
            onClick={degree => setSelectedDegree(degree.target.textContent)}
            className={styles.degreeItem}
          >
            {degree.degree}
          </div>
        );
      })}
    </div>
  );
};

export default DegreeList;
