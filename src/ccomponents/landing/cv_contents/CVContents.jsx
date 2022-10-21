import styles from "./cv_contents.module.css";

const CVContents = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.h2}>Contents of a Cv</h2>

        <h4 className={styles.content}>
          A professional cv must contain the following
        </h4>
        <ul className={styles.ul}>
          <li>Name and contact details</li>
          <li>cv summary</li>
          <li>work experience</li>
          <li>educational background</li>
          <li>skills</li>
        </ul>

        <h4 className={styles.content}>Other optional contents are:</h4>
        <ul className={styles.ul}>
          <li>hobbies</li>
          <li>volunteering experience</li>
        </ul>
      </div>

      <div className={styles.header2}>
        <div className={styles.interviewHeader}>
          <h1 className={styles.h1}>
            Let us help you create your interview winning cv
          </h1>
          {/* <div className={styles.buildCvBtn}>
            <button className={styles.button}>Build my CV now</button>
          </div> */}
        </div>

        <div className={styles.interviewImg}>
          <div className={styles.cover}></div>
        </div>
      </div>
    </div>
  );
};

export default CVContents;
