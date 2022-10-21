import styles from "../../static/styles/cvForm.module.css";
import CountryList from "../helperComponents/CountryList";
import DegreeList from "../helperComponents/DegreeList";
import { useState, useContext, useRef } from "react";
import { EducationContext } from "../../context/educationContext";

const Education = () => {
  // education and state context
  const { updateEducation } = useContext(EducationContext);

  const [countryList, toggleCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [degreeList, toggleDegreeList] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState(null);

  const toggleDropdown = () => {
    toggleDegreeList(prevState => !prevState);
  };

  // get a ref to each input
  const program = useRef(null);
  const school = useRef(null);
  const city = useRef(null);
  const state = useRef(null);
  const zip = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const gpa = useRef(null);
  // const award = useRef(null);
  // const extraCurricular = useRef(null);

  const populateFields = () => {
    const educationDetails = {
      program: program.current.value ? program.current.value : null,
      school: school.current.value ? school.current.value : null,
      city: city.current.value ? city.current.value : null,
      state: state.current.value ? state.current.value : null,
      zip: zip.current.value ? zip.current.value : null,
      start: start.current.value ? start.current.value : null,
      country: !selectedCountry ? null : selectedCountry,
      degree: !selectedDegree ? null : selectedDegree,
      end: end.current.value ? end.current.value : null,
      gpa: gpa.current.value ? gpa.current.value : null
      // award: award.current.value ? award.current.value : null,
      // extraCurricular: extraCurricular.current.value
      //   ? extraCurricular.current.value
      //   : null
    };
    return educationDetails;
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log("checking education in education component", education);
    updateEducation(populateFields());
  };

  const handleAdd = evt => {
    evt.preventDefault();
    updateEducation(populateFields());
    program.current.value = "";
    city.current.value = "";
    state.current.value = "";
    program.current.value = "";
    zip.current.value = "";
    start.current.value = "";
    end.current.value = "";
    gpa.current.value = "";
    school.current.value = "";
    // award.current.value = "";
    // extraCurricular.current.value = "";
    program.current.value = "";
    setSelectedCountry(null);
    setSelectedDegree(null);
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>Education</h2>
      <p className={styles.formSummary}>
        Please enter degrees received, from highest to lowest
      </p>

      <hr className={styles.hr} />

      {/* Degree */}
      <div className={styles.degreeAndProgramWrapper}>
        <div className={styles.degreeWrapper} onClick={toggleDropdown}>
          {selectedDegree || "---select degree---"}
          {degreeList && <DegreeList setSelectedDegree={setSelectedDegree} />}
        </div>

        <input
          ref={program}
          type="text"
          placeholder="Program"
          name="program"
          id="program"
          className={styles.programWrapper}
          required
        ></input>
      </div>

      {/* school */}
      <div className={styles.schoolWrapper}>
        <input
          ref={school}
          type="text"
          placeholder="School"
          name="school"
          id="school"
          required
        ></input>
      </div>

      {/* country and city */}
      <div className={styles.countryCityWrapper}>
        <div
          className={styles.countryListWrapper}
          onClick={() => toggleCountryList(prevState => !prevState)}
        >
          {selectedCountry || "---select country---"}
          {countryList && (
            <CountryList setSelectedCountry={setSelectedCountry} />
          )}
        </div>
        <input
          ref={city}
          type="city"
          placeholder="city"
          name="city"
          id="city"
          required
        ></input>
      </div>

      {/* state-zip */}
      <div className={styles.stateZipWrapper}>
        <input
          ref={state}
          type="text"
          placeholder="state"
          name="state"
          id="state"
        ></input>
        <input
          ref={zip}
          type="text"
          placeholder="zip"
          name="zip"
          id="zip"
          required
        ></input>
      </div>

      <div className={styles.dateWrapper}>
        {/* start */}
        <div className={styles.start}>
          <label htmlFor="start" className={styles.startDateLabel}>
            Start date:
          </label>
          <input
            ref={start}
            type="date"
            placeholder="Start date"
            name="start"
            id="start"
            className={styles.startDateInput}
          ></input>
        </div>

        {/* end */}
        <div className={styles.end}>
          <label htmlFor="end" className={styles.endDateLabel}>
            End date:
          </label>
          <input
            ref={end}
            type="date"
            placeholder="End date"
            name="end"
            id="end"
            className={styles.endDateInput}
          ></input>
        </div>
      </div>

      {/* cgpa */}
      <div className={styles.cgpaWrapper}>
        <input
          ref={gpa}
          type="text"
          placeholder="GPA"
          name="gpa"
          id="gpa"
        ></input>
        <p className={styles.infoText}>Only add your CGPA if it's above 3.5</p>
      </div>

      {/* <div className={styles.awardWrapper}>
        <input
          ref={award}
          type="text"
          placeholder="Award/Honour"
          name="award"
          id="award"
        ></input>
        <div className={styles.addAwardWrapper}>
          <button className={styles.addBtn}>
            + <span>Add award/honour</span>
          </button>
        </div>
      </div> */}

      {/* <div className={styles.extraCurricularWrapper}>
        <input
          ref={extraCurricular}
          type="text"
          placeholder="Extracurricular activities"
          name="extraCurricular"
          id="extraCurricular"
        ></input>
        <div className={styles.addExtraCurricularWrapper}>
          <button className={styles.addBtn}>
            + <span>Add extraCurricular activity</span>
          </button>
        </div>
      </div> */}

      <div className={styles.addWrapper}>
        <button className={styles.addBtn} onClick={handleAdd}>
          + <span>ADD EDUCATION</span>
        </button>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Education;
