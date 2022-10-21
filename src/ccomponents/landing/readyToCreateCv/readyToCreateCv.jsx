import styles from "./rtcc.module.css";

const ReadyToCreateCv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>ready to create your cv?</h2>
      </div>

      <p className={styles.p}>
        customize your professional cv in just three easy steps
      </p>

      <div className={styles.wrapper}>
        <div className={styles.detail}>
          <div className={styles.detailHeader}>1</div>
          <p className={styles.detailP}>choose a template</p>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailHeader}>2</div>
          <p className={styles.detailP}>customize template</p>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailHeader}>3</div>
          <p className={styles.detailP}>save and download cv</p>
        </div>
      </div>

      {/* <div className={styles.buildCvBtn}>
        <button className={styles.button}>Build my CV now</button>
      </div> */}
    </div>
  );
};

export default ReadyToCreateCv;
