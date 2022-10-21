import CardInfo from "./card_data";
import Card from "./whyus_card";

import styles from "./whyUs.module.css";
// 
const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerText}>
        <h2>Why use cvaide?</h2>
      </div>

      <div className={styles.cardContainer}>
        {CardInfo.map(info => (
          <Card
            iconSrc={info.iconSource}
            headerInfo={info.header}
            content={info.content}
            key={info.id}
          />
        ))}
      </div>

      {/* <div className={styles.buildCvBtn}>
        <button className={styles.button}>Build my CV now</button>
      </div> */}
    </div>
  );
};

export default WhyUs;
