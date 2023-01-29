import React from "react";
import styles from "./templateOne.module.css";
import { formatBirth } from "../../helperComponents/helpers"


const ContactGroup = props => {
  const { contactHeader, group } = props;

  return (
    <div className={styles.wrapper}>
      {group.firstName ? (
        <h2 className={styles.leftHeader}>{contactHeader}</h2>
      ) : (
        ""
      )}

      {group.firstName ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-user ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>
            {`${group.firstName} ${group.lastName ? group.lastName : ""} ${group.otherNames ? group.otherNames : ""
              } `}{" "}
          </p>
        </div>
      ) : (
        ""
      )}

      {group.email ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-envelope ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{group.email}</p>
        </div>
      ) : (
        ""
      )}

      {group.phoneNumber ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-phone ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p className={styles.leftItem}>{group.phoneNumber}</p>{" "}
        </div>
      ) : (
        ""
      )}

      {group.state ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-map-marker ${styles.leftItemImgLoc}`} aria-hidden="true"></i>
          <p>{`${group.city ? `${group.city},` : ""}  ${group.state ? `${group.state}.` : ""
            } ${group.country ? group.country : ""} ${group.zip ? `(${group.zip})` : ""}`}</p>
        </div>
      ) : (
        ""
      )}

      {group.nationality ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-flag ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{group.nationality}</p>
        </div>
      ) : (
        ""
      )}

      {group.dob ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-calendar ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{formatBirth(group.dob)}</p>
        </div>
      ) : (
        ""
      )}

      {group.linkedIn ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-linkedin ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{group.linkedIn}</p>
        </div>
      ) : (
        ""
      )}

      {group.github ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-github ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{group.github}</p>
        </div>
      ) : (
        ""
      )}

      {group.website ? (
        <div className={styles.leftItem}>
          <i className={`fa fa-globe ${styles.leftItemImg}`} aria-hidden="true"></i>
          <p>{group.website}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactGroup;
