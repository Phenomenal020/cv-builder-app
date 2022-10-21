import React from "react";
import styles from "./templateOne.module.css";

const FinalizeGroup = props => {
  const { group } = props;

  return (
    <section>
      <div>
        {group["interests"].length > 0 ? (
          <h2 className={styles.leftHeader}>interests</h2>
        ) : (
          ""
        )}
        {group["interests"].length > 0
          ? group.interests.map(interests => (
              <p className={styles.leftItem} key={Math.random() * 1000}>
                {interests}
              </p>
            ))
          : ""}
      </div>
      <div>
        {group["software"].length > 0 ? (
          <h2 className={styles.leftHeader}>software</h2>
        ) : (
          ""
        )}
        {group["software"].length > 0
          ? group.software.map(software => (
              <p className={styles.leftItem} key={Math.random() * 1000}>
                {software}
              </p>
            ))
          : ""}
      </div>
      <div>
        {group["publication"].length > 0 ? (
          <h2 className={styles.leftHeader}>Publication</h2>
        ) : (
          ""
        )}
        {group["publication"].length > 0
          ? group.publication.map(publication => (
              <p className={styles.leftItem} key={Math.random() * 1000}>
                {publication}
              </p>
            ))
          : ""}
      </div>
      <div>
        {group["language"].length > 0 ? (
          <h2 className={styles.leftHeader}>language</h2>
        ) : (
          ""
        )}
        {group.language.length > 0
          ? group["language"].map(language => (
              <p className={styles.leftItem} key={Math.random() * 1000}>
                {language}
              </p>
            ))
          : ""}

        {group["extraCurricular"].length > 0 ? (
          <h2 className={styles.leftHeader}>Extracurricular Activities</h2>
        ) : (
          ""
        )}
        {group["extraCurricular"].length > 0
          ? group["extraCurricular"].map(extraCurricular => (
              <p className={styles.leftItem} key={Math.random() * 1000}>
                {extraCurricular}
              </p>
            ))
          : ""}
      </div>
    </section>
  );
};

export default FinalizeGroup;
