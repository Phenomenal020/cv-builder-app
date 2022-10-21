import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <div className={styles.headerText}>
          <h2 className={styles.h2}>
            Create your CV in just
            <br /> 10 minutes
          </h2>
          <h3 className={styles.h3}>Free sign up. No credit card required</h3>
        </div>

        {/* <div className={styles.buildCvBtn}>
          <button className={styles.button}>Build my CV now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
