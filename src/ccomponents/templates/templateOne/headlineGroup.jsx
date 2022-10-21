import React from "react";
import styles from "./templateOne.module.css";

const HeadlineGroup = props => {
  const { group } = props;

  return (
    <div>
      {group.firstName || group.lastName || group.otherNames ? (
        <h1 className={styles.headlineName}>{`${
          group.firstName ? group.firstName : ""
        } ${group.lastName ? group.lastName : ""}  ${
          group.otherNames ? group.otherNames : ""
        }`}</h1>
      ) : (
        ""
      )}
      {group.headline ? (
        <p className={styles.headlineText}>{group.headline}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeadlineGroup;
