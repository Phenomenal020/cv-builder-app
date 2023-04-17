import styles from "../static/styles/cv.module.css";
import componentsList from "../lib/data/componentList";

import { useState, useContext } from "react";
// import TemplateOne from "../ccomponents/templates/templateOne/templateOne";

import { ContactContext } from "../context/contactContext";
import { EducationContext } from "../context/educationContext";
import { CertificationContext } from "../context/certificationContext";
import { EmploymentContext } from "../context/employmentContext";
import { SkillsContext } from "../context/skillsContext";
import { VolunteerContext } from "../context/volunteerContext";
import { FinalizeContext } from "../context/finalizeContext";
import { PageContext } from "../context/pageContext";

import TemplateTwo from "../ccomponents/templates/templateTwo/TemplateTwo";
import TemplateThree from "../ccomponents/templates/templateThree/TemplateThree";
import TemplateContextProvider, {
  TemplateContext,
} from "../context/templateContext";

const BuildCv = () => {
  const { contact } = useContext(ContactContext);
  const { education } = useContext(EducationContext);
  const { certificationArr } = useContext(CertificationContext);
  const { employment } = useContext(EmploymentContext);
  const { skills } = useContext(SkillsContext);
  const { volunteer } = useContext(VolunteerContext);
  const { finalize } = useContext(FinalizeContext);
  const { index, setIndex } = useContext(PageContext);

  const { handleNextTemplate, handlePrevTemplate, template } =
    useContext(TemplateContext);

  const handlePrevious = () => {
    if (index === 1) {
      return;
    } else {
      setIndex((index) => index - 1);
    }
  };

  const handleNext = () => {
    if (index === 7) {
      return;
    } else {
      setIndex((index) => index + 1);
    }
  };

  let componentToRender = (
    <>
      <button className={styles.nextButton} onClick={handlePrevious}>
        prev
      </button>
      {/* <button className={styles.nextButton} onClick={handleNext}>
        skip
      </button> */}
      <button className={styles.nextButton} onClick={handleNext}>
        next
      </button>
    </>
  );

  if (index === 1) {
    componentToRender = (
      <>
        {/* <button className={styles.nextButton} onClick={handleNext}>
          skip
        </button> */}
        <button className={styles.nextButton} onClick={handleNext}>
          next
        </button>
      </>
    );
  }
  if (index === 7) {
    componentToRender = (
      <button className={styles.nextButton} onClick={handlePrevious}>
        prev
      </button>
    );
  }

  const handleSaveToLocalStorage = () => {
    contact && localStorage.setItem("contactObj", JSON.stringify(contact));
    certificationArr &&
      localStorage.setItem(
        "certificationArr",
        JSON.stringify(certificationArr)
      );
    education &&
      localStorage.setItem("educationArr", JSON.stringify(education));
    employment &&
      localStorage.setItem("employmentArr", JSON.stringify(employment));
    finalize && localStorage.setItem("finalizeObj", JSON.stringify(finalize));
    skills && localStorage.setItem("skillsArr", JSON.stringify(skills));
    volunteer &&
      localStorage.setItem("volunteerArr", JSON.stringify(volunteer));
    // navigate("/print")
  };

  const _handleNextTemplate = () => {
    handleNextTemplate();
  };

  const _handlePrevTemplate = () => {
    handlePrevTemplate();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.pages}>
          {/* progress dots */}
          <section className={styles.progressContainer}>
            <div
              className={index === 1 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 2 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 3 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 4 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 5 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 6 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 7 ? styles.activeDot : styles.progressDot}
            ></div>
            {/* <div
              className={index === 8 ? styles.activeDot : styles.progressDot}
            ></div>
            <div
              className={index === 9 ? styles.activeDot : styles.progressDot}
            ></div> */}
          </section>

          <hr className={styles.hr} />

          <section className={styles.formContainer}>
            {componentsList.map((item, cIndex) => {
              const { id, pageIndex, component } = item;
              let pos = styles.nextSlide;
              if (pageIndex === index) {
                pos = styles.activeSlide;
              }
              return (
                <section className={pos} key={id}>
                  <div className={styles.formWrapper}>{component}</div>
                </section>
              );
            })}
          </section>

          {/* prev/next buttons */}

          <div className={styles.nextButtonWrapper}>{componentToRender}</div>
        </section>

        {/* template */}
        <section className={styles.template}>
          <button className={styles.prevTemplate} onClick={_handlePrevTemplate}>
            <i
              className={`fa fa-chevron-left ${styles.leftIcon}`}
              aria-hidden="true"
            ></i>
          </button>
          <button className={styles.nextTemplate} onClick={_handleNextTemplate}>
            <i
              className={`fa fa-chevron-right ${styles.leftIcon}`}
              aria-hidden="true"
            ></i>
          </button>
          {template === 1 ? (
            <TemplateTwo
              contact={contact}
              education={education}
              certificationArr={certificationArr}
              employment={employment}
              skills={skills}
              volunteer={volunteer}
              finalize={finalize}
            />
          ) : (
            ""
          )}

          {/* <TemplateOne
            contact={contact}
            education={education}
            certificationArr={certificationArr}
            employment={employment}
            skills={skills}
            volunteer={volunteer}
            finalize={finalize}
          /> */}

          {template === 2 ? (
            <TemplateThree
              contact={contact}
              education={education}
              certificationArr={certificationArr}
              employment={employment}
              skills={skills}
              volunteer={volunteer}
              finalize={finalize}
            />
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
};

export default BuildCv;
