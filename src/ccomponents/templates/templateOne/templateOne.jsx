import styles from "./templateOne.module.css";
// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

import ContactGroup from "./contactGroup";
import SkillsGroup from "./skillsGroup";
import FinalizeGroup from "./finalizeGroup";
import MainGroup from "./mainGroup";
import HeadlineGroup from "./headlineGroup";

const TemplateOne = props => {
  const {
    contact,
    education,
    certificationArr,
    employment,
    skills,
    volunteer,
    finalize
  } = props;

  // console.log("templateOne education", education);

  return (
    //  container
    <div className={styles.container}>
      {/* left side */}
      <section className={styles.left}>
        {contact && (
          <ContactGroup group={contact} contactHeader="Contact information" />
        )}
        {skills && <SkillsGroup skills={skills} skillsHeader="Skills" />}
        {finalize && <FinalizeGroup group={finalize} />}
      </section>

      {/* main bar */}
      <section className={styles.right}>
        <HeadlineGroup group={contact} />
        <MainGroup
          educationArr={education}
          educationHeader="education"
          employmentArr={employment}
          employmentHeader="employment"
          certificationArr={certificationArr}
          certificationHeader="Trainings and Continuing Education"
          volunteerArr={volunteer}
          volunteerHeader="volunteer"
          awardArr={finalize.award}
          awardHeader="Award and Honours"
        />
      </section>
    </div>
  );
};

export default TemplateOne;
