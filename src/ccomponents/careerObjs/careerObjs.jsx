import styles from "../../static/styles/cvForm.module.css";

const CareerObjs = () => {
  return (
    <div className={styles.itemContainer}>
      <h2 className={styles.formHeader}>Career Objectives</h2>
      <p className={styles.formSummary}>What are your career objectives</p>
      <hr className={styles.hr} />

      {/* Career Objectives */}

      <textarea
        id="careerObjs"
        name="careerObjs"
        rows="10"
        cols="50"
        defaultValue="Add a brief exposition on your career objectives"
      ></textarea>
    </div>
  );
};

export default CareerObjs;
