import styles from "./navbar.module.css";
import avatar from "../../static/images/avatar.jpg";
import { Link } from "../../../node_modules/react-router-dom/dist";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <h2 className={styles.logoElementSmall}>C</h2>
            <h2 className={styles.logoElement}>V</h2>
            <h2 className={styles.logoElementSmall}>A</h2>
            <h2 className={styles.logoElementSmall}>I</h2>
            <h2 className={styles.logoElementSmall}>D</h2>
            <h2 className={styles.logoElementSmall}>E</h2>
          </div>
        </Link>

        <div className={styles.linkContainer}>
          <ul className={styles.linkWrapper}>
            <li className={styles.link}>
              <Link to="/create">Build cv</Link>
            </li>
            <li className={styles.link}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.link}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={styles.link}>
              <Link to="/login">Login</Link>
            </li>
            <div className={styles.profileImageWrapper}>
              <img
                className={styles.profileImg}
                src={avatar}
                alt="avatar"
                width="35"
                height="35"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
