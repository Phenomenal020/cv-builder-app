import styles from "../../static/styles/cvForm.module.css";
import { useContext, useRef, useState } from "react";
import { EmploymentContext } from "../../context/employmentContext";

const Employment = () => {
  const defaultMsg =
    "Enter short descriptions of tasks completed during your employment and how it helped the company";

  const { employment, updateEmployment, deleteEmployment } = useContext(EmploymentContext);
  const [present, setPresent] = useState(false);
  const [msg, setMsg] = useState(defaultMsg);

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

  const populateFields = () => {
    const employmentDetails = {
      jobId: Math.random() * 10000,
      jobTitle: jobTitle.current.value ? jobTitle.current.value : null,
      companyName: companyName.current.value ? companyName.current.value : null,
      location: location.current.value ? location.current.value : null,
      start: present ? null : (start.current.value ? start.current.value : null),
      end: present ? null : (end.current.value ? end.current.value : null),
      jobDesc:
        jobDesc.current.value.trim() !== defaultMsg && jobDesc.current.value
          ? jobDesc.current.value
          : null,
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

  const handleFocus = () => {
    jobDesc.current.value = "";
  };

  const handleChange = evt => {
    setMsg(evt.target.value);
  };

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
        <div className={styles.employmentRow}>
          <input
            ref={jobTitle}
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            id="jobTitle"
            required
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>

        {/* Company/Organization name */}
        <div className={styles.employmentRow}>
          <input
            ref={companyName}
            type="text"
            placeholder="Company/Organization name"
            name="companyName"
            id="companyName"
            required
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>

        {/* location */}
        <div className={styles.employmentRow}>
          <input
            ref={location}
            type="text"
            placeholder="Location"
            name="location"
            id="location"
            required
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>


        {/* start/end dates */}
        <div className={styles.startEndWrapper}>
          <label htmlFor="start">start date:</label>
          <input
            ref={start}
            type="date"
            placeholder="start"
            name="start"
            id="start"
          ></input>
          <span className={styles.requiredField}>*</span>
          <label htmlFor="end">end date:</label>
          <input
            ref={end}
            type="date"
            placeholder="end"
            name="end"
            id="end"
          ></input>
          {present ? "" : <span className={styles.requiredField}>*</span>}
        </div>
        <div className={styles.currentlyWorkHere}>
          <div className={styles.placeRight}>
            <input
              type="checkbox"
              name="present"
              ref={presently}
              onChange={handleCheck}
              onFocus={handleFocus}
            />
            <label htmlFor="present">I currently work here</label>
          </div>
        </div>

        {/* Job description */}

        <textarea
          ref={jobDesc}
          id="jobDesc"
          name="jobDesc"
          rows="10"
          cols="50"
          value={msg}
          onChange={handleChange}
        ></textarea>

        <hr className={styles.hr} />

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE EMPLOYMENT</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD EMPLOYMENT</span>
          </button>}
        </div>

      </form>

      <section className={styles.editCertContainer}>
        {edit.map(_edit => (
          <div key={Math.random() * 1000} className={styles.editEmploymentWrapper}>
            <div>
              {/* first row */}
              <div className={styles.editSingleRow}>
                <p>{_edit.jobTitle}</p>
              </div>
              {/* second row row */}
              <div className={styles.editSingleRow}>
                <p>{_edit.companyName}</p>
              </div>
              {/* third row */}
              <div className={styles.editSingleRow}>
                <p>{_edit.location}</p>
              </div>
              {/* fourth row */}
              <div className={styles.editDoubleRowEmp}>
                {/* present ticked? */}
                {_edit.presently ? <p>I currently work here</p> : <><p className={styles.employmentStart}>{_edit.start}</p>
                  <p className={styles.employmentStart}>{_edit.end}</p>
                </>}
              </div>
              <p className={styles.editEmploymentDesc}>{_edit.jobDesc}</p>

              <div className={styles.employmentRow}>
                <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.updateBtn}>update employment</button>
                <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.updateBtn}>delete employment</button>
              </div>

            </div>
          </div >
        ))}
      </section >

    </>

  );
};

export default Employment;
