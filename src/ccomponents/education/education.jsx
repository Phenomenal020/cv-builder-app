import styles from "../../static/styles/cvForm.module.css";
import CountryList from "../helperComponents/CountryList";
import DegreeList from "../helperComponents/DegreeList";
import { useState, useContext, useRef } from "react";
import { EducationContext } from "../../context/educationContext";

const Education = () => {

  const { education, updateEducation, deleteEducation } = useContext(EducationContext);

  const [edit, setEdit] = useState(education)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

  const [countryList, toggleCountryList] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [degreeList, toggleDegreeList] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState(null);

  // start
  const [startDay, setStartDay] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endDay, setEndDay] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');

  const handleStartDayChange = (event) => {
    setStartDay(event.target.value);
  };

  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
    setStartDay('');
  };

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndDayChange = (event) => {
    setEndDay(event.target.value);
  };

  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
    setEndDay('');
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const generateStartDayOptions = () => {
    const numDays = getDaysInMonth(startMonth, startYear);
    const options = [];
    for (let i = 1; i <= numDays; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateEndDayOptions = () => {
    const numDays = getDaysInMonth(endMonth, endYear);
    const options = [];
    for (let i = 1; i <= numDays; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateEndMonthOptions = () => {
    const months = [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' },
    ];
    return months.map((endMonth) => (
      <option key={endMonth.value} value={endMonth.value}>
        {endMonth.label}
      </option>
    ));
  };

  const generateStartMonthOptions = () => {
    const months = [
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' },
    ];
    return months.map((startMonth) => (
      <option key={startMonth.value} value={startMonth.value}>
        {startMonth.label}
      </option>
    ));
  };

  const generateStartYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };

  const generateEndYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 100; i <= currentYear; i++) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return years;
  };
  // end


  const toggleDropdown = () => {
    toggleDegreeList(prevState => !prevState);
  }
  
  // references
  const program = useRef(null);
  const school = useRef(null);
  const state = useRef(null);
  const gpa = useRef(null);
  const relevantCourses = useRef(null)
  const project = useRef(null)

  // populate relevant fields
  const populateFields = () => {
    const educationDetails = {
      educationId: Math.random() * 1000,
      program: program.current.value ? program.current.value : null,
      school: school.current.value ? school.current.value : null,
      degree: selectedDegree ? selectedDegree : null,
      end: (endMonth && endDay && endYear) ? `${endYear}-${endMonth}-${endDay}` : null,
      start: (startMonth && startDay && startYear) ? `${startYear}-${startMonth}-${startDay}` : null,
      state: state.current.value ? state.current.value : null,
      country: selectedCountry ? selectedCountry : null,
      gpa: gpa.current.value ? gpa.current.value : null,
      relevantCourses: relevantCourses.current.value ? relevantCourses.current.value : null,
      project: project.current.value ? project.current.value : null
    };
    // check required fields
    if (!educationDetails.program || !educationDetails.degree || !educationDetails.school || !educationDetails.state || !educationDetails.country || !educationDetails.start || !educationDetails.end) {
      return null
    } else {
      return educationDetails;
    }
  };

  // reset fields
  const resetFields = () => {
    program.current.value = "";
    state.current.value = "";
    gpa.current.value = "";
    school.current.value = "";
    relevantCourses.current.value = "";
    project.current.value = "";
    setSelectedCountry(null);
    setSelectedDegree(null);
    setEditStart("")
    setEditEnd("")
    setStartDay("")
    setStartMonth("")
    setStartYear("")
    setEndDay("")
    setEndMonth("")
    setEndYear("")
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
      state.current.value = __edit.state;
      program.current.value = __edit.program;
      let editStartSplit = __edit.start.split("-");
      setStartDay(editStartSplit[2])
      setStartMonth(editStartSplit[1])
      setStartYear(editStartSplit[0])
      setEditStart(__edit.start)
      let editEndSplit = __edit.end.split("-");
      setEndDay(editEndSplit[2])
      setEndMonth(editEndSplit[1])
      setEndYear(editEndSplit[0])
      setEditEnd(__edit.end)
      gpa.current.value = __edit.gpa;
      school.current.value = __edit.school;
      relevantCourses.current.value = __edit.relevantCourses;
      project.current.value = __edit.project;
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
        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Degree: <span className={styles.requiredField}>*</span></label>
          <div className={styles.degreeWrapper} onClick={toggleDropdown}>
            {selectedDegree || "---select degree---"}
            {degreeList && <DegreeList setSelectedDegree={setSelectedDegree} />}
          </div>
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Program: <span className={styles.requiredField}>*</span></label>
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
        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>School: <span className={styles.requiredField}>*</span></label>
          <input
            ref={school}
            type="text"
            placeholder="School"
            name="school"
            id="school"
            required
          ></input>
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>State: <span className={styles.requiredField}>*</span></label>
          <input
            ref={state}
            type="text"
            placeholder="state"
            name="state"
            id="state"
          ></input>
        </div>

        {/* country and city */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Country: <span className={styles.requiredField}>*</span></label>
          <div
            className={styles.countryListWrapper}
            onClick={() => toggleCountryList(prevState => !prevState)}
          >
            {selectedCountry || "---select country---"}
            {countryList && (
              <CountryList setSelectedCountry={setSelectedCountry} />
            )}
          </div>
        </div>


        {/* start */}
        <div className={styles.start}>
          <label htmlFor="start" className={styles.labelText}>
            Start date: <span className={styles.requiredField}>*</span>
          </label>
          <div className={styles.dateWrapper}>
            <select value={startMonth} onChange={handleStartMonthChange}>
              <option value="">Month</option>
              {generateStartMonthOptions()}
            </select>
            <select value={startDay} onChange={handleStartDayChange}>
              <option value="">Day</option>
              {generateStartDayOptions()}
            </select>
            <select value={startYear} onChange={handleStartYearChange}>
              <option value="">Year</option>
              {generateStartYearOptions()}
            </select>
          </div>
        </div>

        {/* end */}
        <div className={styles.end}>
          <label htmlFor="end" className={styles.labelText}>
            End date: <span className={styles.requiredField}>*</span>
          </label>
          <div className={styles.dateWrapper}>
            <select value={endMonth} onChange={handleEndMonthChange}>
              <option value="">Month</option>
              {generateEndMonthOptions()}
            </select>
            <select value={endDay} onChange={handleEndDayChange}>
              <option value="">Day</option>
              {generateEndDayOptions()}
            </select>
            <select value={endYear} onChange={handleEndYearChange}>
              <option value="">Year</option>
              {generateEndYearOptions()}
            </select>
          </div>
        </div>

        <div className={styles.textFieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Relevant courses taken: </label>
          <textarea
            ref={relevantCourses}
            id="relevantCourses"
            name="relevantCourses"
            rows="10"
            cols="50"
          // value={msg}
          // onChange={handleChange}
          // onFocus={handleFocus}
          ></textarea>
        </div>

        <div className={styles.textFieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Project: </label>
          <textarea
            ref={project}
            id="project"
            name="project"
            rows="10"
            cols="50"
          // value={msg}
          // onChange={handleChange}
          // onFocus={handleFocus}
          ></textarea>
        </div>


        {/* cgpa */}
        <div className={styles.cgpaWrapper}>
          <label htmlFor="gpa" className={styles.labelText}>CGPA: </label>
          <input
            ref={gpa}
            type="text"
            placeholder="GPA. Format: 3.5/5.0"
            name="gpa"
            id="gpa"
          ></input>
        </div>
        <p className={styles.infoText}>* Only add your CGPA if it's above 3.5/5.0 or equivalent</p>

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE EDUCATION</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD EDUCATION</span>
          </button>}
        </div>

      </form>

      {/* -----------------------summary section ------------------- */}
      <section className={styles.editEducationContainer}>
        <span className={styles.summaryText}>Summary</span>
        {edit.map(_edit => (
          // wrapper
          <div className={styles.editEducationWrapper} key={_edit.educationId}>

            {/* first row */}
            <div className={styles.editInputLine}>
              <p className={styles.editDegree}>{_edit.degree}</p>
              <p className={styles.editProgram}>{_edit.program}</p>
            </div>
            {/* second row */}
            <div className={styles.editInputLine}>
              <p className={styles.editSchool}>{_edit.school}</p>

            </div>
            {/* third row */}
            <div className={styles.editInputLine}>
              <p className={styles.editCountry}>{_edit.country}</p>
            </div>
            {/* fourth row */}
            <div className={styles.editInputLine}>
              <p className={styles.editCountry}>{_edit.state}</p>
            </div>
            {/* fifth row */}
            <div className={styles.editInputLine}>
              <p className={styles.editStart}>{_edit.start}</p>
              <p className={styles.editEnd}>{_edit.end}</p>
            </div>

            {_edit.gpa ? <div className={styles.editInputLine}>
              <p className={styles.editGpa}>{_edit.gpa}</p>
            </div> : ""}

            {_edit.relevantCourses ? <div className={styles.editInputLine}>
              <p className={styles.editDetails}>{_edit.relevantCourses}</p>
            </div> : ""}

            {_edit.project ? <div className={styles.editInputLine}>
              <p className={styles.editDetails}>{_edit.project}</p>
            </div> : ""}

            <div className={styles.updateFieldsWrapper}>
              <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.iconBtn}><i className="fa fa-pencil" aria-hidden="true"></i></button>
              <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.iconBtn}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>


          </div>
        ))}
      </section>
    </>
  );
};

export default Education;