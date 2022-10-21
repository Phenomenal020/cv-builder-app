import styles from "../../static/styles/cvForm.module.css";

const GreatWork = () => {
  return (
    <div className={styles.itemContainer}>
      <h1 className={styles.formHeader}>Great Work!</h1>

      <div>
        <p className={styles.formSummary}>Your CV is looking great already</p>
        <p className={styles.formSummary}>
          You can add your volunteer experience in the next section if you have
          any.
        </p>
      </div>

      <div>
        <p className={styles.formSummary}>
          Do you have any volunteer experience?
        </p>
      </div>

      <div className={styles.volunteerExperience}>
      <button>YES</button>
        <button>NO</button>
      </div>
    </div>
  );
};

export default GreatWork;
