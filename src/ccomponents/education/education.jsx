import styles from "../../static/styles/cvForm.module.css";
import CountryList from "../helperComponents/CountryList";
import DegreeList from "../helperComponents/DegreeList";
import { useState, useContext, useRef } from "react";
import { EducationContext } from "../../context/educationContext";

const Education = () => {

  // education and state context
  const { education, updateEducation, deleteEducation } = useContext(EducationContext);
  // edits
  const [edit, setEdit] = useState(education)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  // countries and degrees state
  const [countryList, toggleCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [degreeList, toggleDegreeList] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState(null);

  const toggleDropdown = () => {
    toggleDegreeList(prevState => !prevState);
  }
  // references
  const program = useRef(null);
  const school = useRef(null);
  const city = useRef(null);
  const state = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const gpa = useRef(null);
  // populate relevant fields
  const populateFields = () => {
    const educationDetails = {
      educationId: Math.random() * 1000,
      program: program.current.value ? program.current.value : null,
      school: school.current.value ? school.current.value : null,
      degree: selectedDegree ? selectedDegree : null,
      end: end.current.value ? end.current.value : null,
      start: start.current.value ? start.current.value : null,
      city: city.current.value ? city.current.value : null,
      state: state.current.value ? state.current.value : null,
      country: selectedCountry ? selectedCountry : null,
      gpa: gpa.current.value ? gpa.current.value : null
    };
    // check required fields
    if (!educationDetails.program || !educationDetails.degree || !educationDetails.school || !educationDetails.start || !educationDetails.end) {
      return null
    } else {
      return educationDetails;
    }
  };
  // reset fields
  const resetFields = () => {
    program.current.value = "";
    city.current.value = "";
    state.current.value = "";
    program.current.value = "";
    start.current.value = "";
    end.current.value = "";
    gpa.current.value = "";
    school.current.value = "";
    program.current.value = "";
    setSelectedCountry(null);
    setSelectedDegree(null);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let educationDet = populateFields()
    if (educationDet) {
      let newEducation = updateEducation(educationDet, null);
      setEdit(prevState => [...newEducation])
      resetFields()
      setEditMode(false)
    } else {
      console.log("Missing one or more required fields")
    }
  };

  const updateHandler = (__edit, mode) => {
    if (mode === "update") {
      // evt.preventDefault()
      // program.current.value = __edit.program
      city.current.value = __edit.city
      state.current.value = __edit.state;
      program.current.value = __edit.program;
      start.current.value = __edit.start;
      end.current.value = __edit.end;
      gpa.current.value = __edit.gpa;
      school.current.value = __edit.school;
      // program.current.value = __edit.program;
      setSelectedCountry(__edit.country);
      setSelectedDegree(__edit.degree);
      setEditMode(true)
      setEditId(__edit.educationId)
    } else {
      // delete
      let newEducation = deleteEducation(__edit);
      setEdit(prevState => [...newEducation])
      resetFields()
      setEditMode(false)
    }

  }

  const handleEditSubmit = (evt) => {
    evt.preventDefault()
    let educationDet = populateFields()
    if (educationDet) {
      let newEducation = updateEducation(educationDet, editId);
      setEdit(prevState => [...newEducation])
      setEditMode(false)
      resetFields()
      setEditId(null)
    } else {
      console.log("Missing one or more required fields")
    }
  }

  return (
    <>
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
          <span className={styles.requiredField}>*</span>

          <input
            ref={program}
            type="text"
            placeholder="Program"
            name="program"
            id="program"
            className={styles.programWrapper}
            required
          ></input>
          <span className={styles.requiredField}>*</span>
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
          <span className={styles.requiredField}>*</span>
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
          <span className={styles.requiredField}>*</span>
          <input
            ref={city}
            type="city"
            placeholder="city"
            name="city"
            id="city"
          ></input>
          <input
            ref={state}
            type="text"
            placeholder="state"
            name="state"
            id="state"
          ></input>
          <span className={styles.requiredField}>*</span>
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
              required
              className={styles.startDateInput}
            ></input>
            <span className={styles.requiredField}>*</span>
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
              required
              className={styles.endDateInput}
            ></input>
            <span className={styles.requiredField}>*</span>
          </div>
        </div>

        {/* cgpa */}
        <div className={styles.cgpaWrapper}>
          <input
            ref={gpa}
            type="text"
            placeholder="GPA. Format: 3.5/5.0"
            name="gpa"
            id="gpa"
          ></input>
          <p className={styles.infoText}>* Only add your CGPA if it's above 3.5/5.0 or equivalent</p>
        </div>

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE EDUCATION</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD EDUCATION</span>
          </button>}
        </div>

      </form>

      {/* summary section */}
      <section className={styles.editEducationContainer}>
        {edit.map(_edit => (
          // wrapper
          <div className={styles.editEducationWrapper} key={_edit.educationId}>

            {/* first row */}
            <div className={styles.editDoubleRow}>
              <p className={styles.editDegree}>{_edit.degree}</p>
              <p className={styles.editProgram}>{_edit.program}</p>
            </div>
            {/* second row */}
            <p className={styles.editSchool}>{_edit.school}</p>
            {/* third row */}
            <div className={styles.editDoubleRow}>
              <p className={styles.editCountry}>{_edit.country}</p>
              <p className={styles.editCity}>{_edit.city}</p>
            </div>
            {/* fourth row */}
            <div className={styles.editDoubleRow}>
              <p className={styles.editState}>{_edit.state}</p>
              <p className={styles.editZip}>{_edit.zip}</p>
            </div>
            {/* fifth row */}
            <div className={styles.editTripleRow}>
              <p className={styles.editStart}>{_edit.start}</p>
              <p className={styles.editEnd}>{_edit.end}</p>
              <p className={styles.editGpa}>{_edit.gpa}</p>
            </div>

            <div className={styles.updateFieldsWrapper}>
              <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.updateBtn}>update education</button>
              <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.updateBtn}>delete education</button>
            </div>


          </div>
        ))}
      </section>
    </>
  );
};

export default Education;