import styles from "../../static/styles/cvForm.module.css";
import { useContext, useRef, useState } from "react";
import { EmploymentContext } from "../../context/employmentContext";

const Employment = () => {

  const { employment, updateEmployment, deleteEmployment } = useContext(EmploymentContext);
  const [present, setPresent] = useState(false);

  const [edit, setEdit] = useState(employment)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

  const jobTitle = useRef(null);
  const companyName = useRef(null);
  const location = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const jobDesc = useRef(null);
  const presently = useRef(null);

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

  // const toggleDropdown = () => {
  //   toggleDegreeList(prevState => !prevState);
  // }

  const populateFields = () => {
    const employmentDetails = {
      jobId: Math.random() * 10000,
      jobTitle: jobTitle.current.value ? jobTitle.current.value : null,
      companyName: companyName.current.value ? companyName.current.value : null,
      jobDesc: jobDesc.current.value ? jobDesc.current.value : null,
      location: location.current.value ? location.current.value : null,
      start: (startMonth && startDay && startYear) ? `${startYear}-${startMonth}-${startDay}` : null,
      end: present ? null : (endMonth && endDay && endYear) ? `${endYear}-${endMonth}-${endDay}` : null,
      presently: present
    };
    // check required fields
    let date = employmentDetails.presently ? true : (employmentDetails.start && employmentDetails.end) ? true : false
    if (!employmentDetails.jobTitle || !employmentDetails.companyName || !date) {
      return null
    } else {
      return employmentDetails;
    }
  };

  const resetFields = () => {
    jobTitle.current.value = "";
    companyName.current.value = "";
    location.current.value = "";
    start.current.value = "";
    end.current.value = "";
    jobDesc.current.value = "";
    presently.current.checked = false;
    setPresent(false);
    // setMsg(defaultMsg)
    setEditStart("")
    setEditEnd("")
    setStartDay("")
    setStartMonth("")
    setStartYear("")
    setEndDay("")
    setEndMonth("")
    setEndYear("")
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let employmentDet = populateFields()
    if (employmentDet) {
      let newEmployment = updateEmployment(employmentDet, null);
      setEdit(prevState => [...newEmployment])
      resetFields()
      setEditMode(false)
    } else {
      console.log("Missing one or more required fields")
    }
  };

  const updateHandler = (__edit, mode) => {
    if (mode === "update") {
      jobTitle.current.value = __edit.jobTitle
      companyName.current.value = __edit.companyName;
      location.current.value = __edit.location;
      start.current.value = __edit.start;
      end.current.value = __edit.end;
      jobDesc.current.value = __edit.jobDesc;
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
      setPresent(prevState => __edit.present);
      setEditMode(true)
      setEditId(__edit.jobId)
    } else {
      let newEmployment = deleteEmployment(__edit);
      setEdit(prevState => [...newEmployment])
      resetFields()
      setEditMode(false)
    }

  }

  // const handleFocus = () => {
  //   jobDesc.current.value = "";
  // };

  const handleCheck = () => {
    setPresent(presently.current.checked);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault()
    let employmentDet = populateFields()
    if (employmentDet) {
      let newEmployment = updateEmployment(employmentDet, editId);
      setEdit(prevState => [...newEmployment])
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
        <h2 className={styles.formHeader}>Employment</h2>
        <p className={styles.formSummary}>
          Please enter your work history, starting from the most recent to the
          least recent
        </p>
        <hr className={styles.hr} />

        {/* Job title */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="start" className={styles.labelText}>Job Title: <span className={styles.requiredField}>*</span></label>
          <input
            ref={jobTitle}
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            id="jobTitle"
            required
          ></input>
        </div>

        {/* Company/Organization name */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="start" className={styles.labelText}>Organization: <span className={styles.requiredField}>*</span></label>
          <input
            ref={companyName}
            type="text"
            placeholder="Company/Organization name"
            name="companyName"
            id="companyName"
            required
          ></input>
        </div>

        {/* location */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="start" className={styles.labelText}>Location: <span className={styles.requiredField}>*</span></label>
          <input
            ref={location}
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            required
          ></input>
        </div>

        {/* start/end dates */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="start" className={styles.labelText}>Start: <span className={styles.requiredField}>*</span></label>
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

        <div className={styles.fieldWrapper}>
          <label htmlFor="end" className={styles.labelText}>End: {present ? "" : <span className={styles.requiredField}>*</span>}</label>
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

        <div className={styles.fieldWrapper}>
          <div className={styles.placeRight}>
            <input
              type="checkbox"
              name="present"
              ref={presently}
              onChange={handleCheck}
            // onFocus={handleFocus}
            />
            <label htmlFor="present" className={styles.currentlyWorkHere}>I currently work here</label>
          </div>
        </div>

        {/* Job description */}

        <div className={styles.fieldWrapper}>
          <label htmlFor="end" className={styles.labelText}>Role description:</label>
          <textarea
            ref={jobDesc}
            id="jobDesc"
            name="jobDesc"
            rows="10"
            cols="50"
          ></textarea>
        </div>

        <hr className={styles.hr} />

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE EMPLOYMENT</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD EMPLOYMENT</span>
          </button>}
        </div>
{/*  */}
      </form>

      <section className={styles.editCertContainer}>
        <span className={styles.summaryText}>Summary</span>
        {edit.map(_edit => (
          <div key={Math.random() * 1000} className={styles.editEmploymentWrapper}>
            <div>
              {/* first row */}
              <div className={styles.editInputLine}>
                <p>{_edit.jobTitle}</p>
              </div>
              {/* second row row */}
              <div className={styles.editInputLine}>
                <p>{_edit.companyName}</p>
              </div>
              {/* third row */}
              <div className={styles.editInputLine}>
                <p>{_edit.location}</p>
              </div>
              {/* fourth row */}
              <div className={styles.editInputLine}>
                {/* present ticked? */}
                <p className={styles.employmentStart}>{_edit.start}</p>
                {_edit.presently ? <p className={styles.employmentStartCurrent}>I currently work here</p> : <p className={styles.employmentEnd}>{_edit.end}</p>
                }
              </div>
              <p className={styles.editEmpDetails}>{_edit.jobDesc}</p>

              <div className={styles.updateFieldsWrapper}>
                <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.iconBtn}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.iconBtn}><i className="fa fa-trash" aria-hidden="true"></i></button>
              </div>

            </div>
          </div >
        ))}
      </section >

    </>

  );
};

export default Employment;
