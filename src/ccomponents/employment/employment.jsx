import styles from "../../static/styles/cvForm.module.css";
import { useContext, useRef, useState } from "react";
import { EmploymentContext } from "../../context/employmentContext";

const Employment = () => {
  const defaultMsg =
    "Enter short descriptions of tasks completed during your employment and how it helped the company";

  const { updateEmployment } = useContext(EmploymentContext);
  const [present, setPresent] = useState(false);
  const [msg, setMsg] = useState(defaultMsg);

  const jobTitle = useRef(null);
  const companyName = useRef(null);
  const location = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const jobDesc = useRef(null);
  const presently = useRef(null);

  const populateFields = () => {
    const employmentDetails = {
      jobTitle: jobTitle.current.value ? jobTitle.current.value : null,
      companyName: companyName.current.value ? companyName.current.value : null,
      location: location.current.value ? location.current.value : null,
      start: start.current.value ? start.current.value : null,
      end: end.current.value ? end.current.value : null,
      jobDesc:
        jobDesc.current.value !== defaultMsg && jobDesc.current.value
          ? jobDesc.current.value
          : null,
      presently: present
    };
    return employmentDetails;
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
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateEmployment(populateFields());
  };

  const handleFocus = () => {
    jobDesc.current.value = "";
  };

  const handleChange = evt => {
    setMsg(evt.target.value);
  };

  const handleAdd = evt => {
    evt.preventDefault();
    updateEmployment(populateFields());
    resetFields();
  };

  const handleCheck = () => {
    setPresent(presently.current.checked);
  };

  // console.log("present", present);

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>Employment</h2>
      <p className={styles.formSummary}>
        Please enter your work history, starting from the most recent to the
        least recent
      </p>
      <hr className={styles.hr} />

      {/* Job title */}
      <div>
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
      <div>
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
      <input
        ref={location}
        type="text"
        placeholder="Location"
        name="location"
        id="location"
        required
      ></input>

      {/* start/end dates */}
      <div className={styles.startEndWrapper}>
        <label htmlFor="start">start:</label>
        <input
          ref={start}
          type="date"
          placeholder="start"
          name="start"
          id="start"
        ></input>
        <label htmlFor="end">end:</label>
        <input
          ref={end}
          type="date"
          placeholder="end"
          name="end"
          id="end"
        ></input>
      </div>
      <div className={styles.currentlyWorkHere}>
        <div></div>
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
        <button className={styles.addBtn} onClick={handleAdd}>
          + <span>ADD EMPLOYMENT</span>
        </button>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Employment;
