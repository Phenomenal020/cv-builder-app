import React from "react";
import styles from "./templateOne.module.css";
import personIcon from "../../../static/icons/home.svg";
import mailIcon from "../../../static/icons/email.svg";
import phoneIcon from "../../../static/icons/call.svg";
import homeIcon from "../../../static/icons/home.svg";
import dobIcon from "../../../static/icons/dob.svg";
import flagIcon from "../../../static/icons/flag.svg";
import githubIcon from "../../../static/icons/github.svg";
import websiteIcon from "../../../static/icons/website.svg";
import linkedInIcon from "../../../static/icons/linkedIn.svg";
import otherIcon from "../../../static/icons/other.svg";
import { formatBirth } from "../../helperComponents/helpers";

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
          <img src={personIcon} alt="Person" className={styles.leftItemImg} />
          <p>
            {`${group.firstName} ${group.lastName ? group.lastName : ""} ${
              group.otherNames ? group.otherNames : ""
            } `}{" "}
          </p>
        </div>
      ) : (
        ""
      )}

      {group.email ? (
        <div className={styles.leftItem}>
          <img src={mailIcon} alt="E-mail" className={styles.leftItemImg} />
          <p>{group.email}</p>
        </div>
      ) : (
        ""
      )}

      {group.phoneNumber ? (
        <div className={styles.leftItem}>
          <img
            src={phoneIcon}
            alt="Phone number"
            className={styles.leftItemImg}
          />
          <p className={styles.leftItem}>{group.phoneNumber}</p>{" "}
        </div>
      ) : (
        ""
      )}

      {group.city ? (
        <div className={styles.leftItem}>
          <img src={homeIcon} alt="City" className={styles.leftItemImg} />
          <p>{`${group.city ? group.city : ""} ${group.zip ? group.zip : ""} ${
            group.state ? group.state : ""
          } ${group.country ? group.country : ""}`}</p>
        </div>
      ) : (
        ""
      )}

      {group.nationality ? (
        <div className={styles.leftItem}>
          <img
            src={flagIcon}
            alt="Nationality"
            className={styles.leftItemImg}
          />
          <p>{group.nationality}</p>
        </div>
      ) : (
        ""
      )}

      {group.dob ? (
        <div className={styles.leftItem}>
          <img
            src={dobIcon}
            alt="Date Of Birth"
            className={styles.leftItemImg}
          />
          <p>{formatBirth(group.dob)}</p>
        </div>
      ) : (
        ""
      )}

      {group.linkedIn ? (
        <div className={styles.leftItem}>
          <img
            src={linkedInIcon}
            alt="linkedIn url"
            className={styles.leftItemImg}
          />
          <p>{group.linkedIn}</p>
        </div>
      ) : (
        ""
      )}

      {group.github ? (
        <div className={styles.leftItem}>
          <img
            src={githubIcon}
            alt="github url"
            className={styles.leftItemImg}
          />
          <p>{group.github}</p>
        </div>
      ) : (
        ""
      )}

      {group.website ? (
        <div className={styles.leftItem}>
          <img
            src={websiteIcon}
            alt="github url"
            className={styles.leftItemImg}
          />
          <p>{group.website}</p>
        </div>
      ) : (
        ""
      )}

      {group.other ? (
        <div className={styles.leftItem}>
          <img src={otherIcon} alt="other" className={styles.leftItemImg} />
          <p>{group.other}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactGroup;
