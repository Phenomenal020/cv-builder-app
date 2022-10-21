import styles from "../static/styles/cv.module.css";
import componentsList from "../lib/data/componentList";

import { useState, useContext } from "react";
import TemplateOne from "../ccomponents/templates/templateOne/templateOne";

import donotSaveIcon from "../static/icons/file_download_off.svg";
import cvDownloadIcon from "../static/icons/save_file.svg";
import databaseIcon from "../static/icons/database.svg";

import { ContactContext } from "../context/contactContext";
import { EducationContext } from "../context/educationContext";
import { CertificationContext } from "../context/certificationContext";
import { EmploymentContext } from "../context/employmentContext";
import { SkillsContext } from "../context/skillsContext";
import { VolunteerContext } from "../context/volunteerContext";
import { FinalizeContext } from "../context/finalizeContext";

const BuildCv = () => {
  const [index, setIndex] = useState(1);
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const { contact } = useContext(ContactContext);
  const { education } = useContext(EducationContext);
  const { certificationArr } = useContext(CertificationContext);
  const { employment } = useContext(EmploymentContext);
  const { skills } = useContext(SkillsContext);
  const { volunteer } = useContext(VolunteerContext);
  const { finalize } = useContext(FinalizeContext);

  // console.log("buildcv education", education);

  const handlePrevious = () => {
    if (index === 1) {
      return;
    } else {
      setIndex(index => index - 1);
    }
  };

  const handleNext = () => {
    if (index === 7) {
      return;
    } else {
      setIndex(index => index + 1);
    }
  };

  let componentToRender = (
    <>
      <button className={styles.nextButton} onClick={handlePrevious}>
        prev
      </button>
      <button className={styles.nextButton} onClick={handleNext}>
        next
      </button>
    </>
  );

  if (index === 1) {
    componentToRender = (
      <button className={styles.nextButton} onClick={handleNext}>
        next
      </button>
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
      finalize &&
      localStorage.setItem("finalizeObj", JSON.stringify(finalize));
    skills && localStorage.setItem("skillsArr", JSON.stringify(skills));
    volunteer &&
      localStorage.setItem("volunteerArr", JSON.stringify(volunteer));
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
          <TemplateOne
            contact={contact}
            education={education}
            certificationArr={certificationArr}
            employment={employment}
            skills={skills}
            volunteer={volunteer}
            finalize={finalize}
          />
          {showDownloadOptions ? (
            <div
              className={styles.downloadOptionsWrapper}
              onMouseLeave={() => setShowDownloadOptions(false)}
            >
              <img
                src={cvDownloadIcon}
                className={styles.downloadCvIcon}
                alt="Download cv and save data to browser"
                onClick={handleSaveToLocalStorage}
              />
              <img
                src={databaseIcon}
                className={styles.downloadCvIcon}
                alt="Download cv and save data to database"
              />
              <img
                src={donotSaveIcon}
                className={styles.downloadCvIcon}
                alt="Download cv and do not save"
              />
            </div>
          ) : (
            <div
              className={styles.downloadOptionsWrapper}
              onMouseEnter={() => setShowDownloadOptions(true)}
              // onMouseLeave={() => setShowDownloadOptions(false)}
            >
              <img
                src={cvDownloadIcon}
                className={styles.downloadCvIcon}
                alt="Download cv and save data to browser"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BuildCv;
