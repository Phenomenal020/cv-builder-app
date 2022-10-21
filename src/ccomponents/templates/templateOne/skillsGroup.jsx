import React from "react";
import styles from "./templateOne.module.css";

const SkillsGroup = props => {
  const { skillsHeader, skills } = props;

  return (
    <div>
      {skills.length > 0 ? (
        <h2 className={styles.leftHeader}>{skillsHeader}</h2>
      ) : (
        ""
      )}
      {skills.length > 0 && (
        <div className={styles.skillContainer}>
          {skills.map(skill => {
            return (
              <div key={Math.random() * 1000} className={styles.skillWrapper}>
                <div className={styles.skillNameWrapper}>{skill.skill}</div>
                <div className={styles.progressWrapper}>
                  <div
                    className={styles.progressBar}
                    style={{
                      backgroundColor: "green",
                      width: `${skill.progress}%`
                    }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SkillsGroup;
