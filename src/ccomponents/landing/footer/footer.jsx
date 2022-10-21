import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.cvaide}>cV<span>AIDE</span></div>

        <div className={styles.cvTools}>
          <h3 className={styles.first}>cv tools</h3>
          <ul>
            <li>cv builder</li>
            <li>cv templates</li>
            <li>contents of a cv</li>
          </ul>
        </div>

        <div className={styles.support}>
          <ul>
            <li className={styles.first}>support</li>
            <li>about</li>
            <li>contact</li>
            <li>help</li>
          </ul>
        </div>

      </div>

      <div className={styles.copyright}>
        <h3>&copy; 2022, CVAIDE. All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
