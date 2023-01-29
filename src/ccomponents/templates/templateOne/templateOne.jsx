import styles from "./templateOne.module.css";
import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';

import ContactGroup from "./contactGroup";
import SkillsGroup from "./skillsGroup";
import FinalizeGroup from "./finalizeGroup";
import MainGroup from "./mainGroup";
import HeadlineGroup from "./headlineGroup";

import { useReactToPrint } from "react-to-print";

const TemplateOne = props => {

  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print cv",
    onAfterPrint: () => alert("Print success")
  })

  const {
    contact,
    education,
    certificationArr,
    employment,
    skills,
    volunteer,
    finalize
  } = props;

  // console.log("templateOne finalize", finalize.award);

  return (
    <>
      <div className={styles.container} ref={componentRef}>



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
          {(contact.headline || contact.profileImg) && <div className={styles.headLine}>
            {contact.headline && <div className={styles.headLineText}><HeadlineGroup group={contact} /></div>}
            {contact.profileImg && <div className={styles.profileImg}></div>}
          </div>}

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

      <div>
        <button onClick={handlePrint}>printCv</button>
      </div>

    </>

  );
};

export default TemplateOne;
