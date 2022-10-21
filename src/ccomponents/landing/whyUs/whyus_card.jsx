import styles from "./whyus_card.module.css";


const Card = ({ headerInfo, content, iconSrc, alt }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconFont}>
        <img src={iconSrc} width="40" height="40" alt={alt} />
      </div>
      <div className={styles.header}>{headerInfo}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Card;