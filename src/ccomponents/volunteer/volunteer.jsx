import styles from "../../static/styles/cvForm.module.css";
import { useRef, useContext, useState } from "react";
import { VolunteerContext } from "../../context/volunteerContext";
// 
const Volunteer = () => {

  const { volunteer, updateVolunteer, deleteVolunteer } = useContext(VolunteerContext);
  const [present, setPresent] = useState(false);

  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  const [edit, setEdit] = useState(volunteer)

  const position = useRef(null);
  const project = useRef(null);
  const location = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const responsibilities = useRef(null);
  const presently = useRef(null);

  const populateFields = () => {
    const volunteerDetails = {
      volunteerId: Math.random() * 10000,
      position: position.current.value ? position.current.value : null,
      project: project.current.value ? project.current.value : null,
      location: location.current.value ? location.current.value : null,
      start: start.current.value ? start.current.value : null,
      end: end.current.value ? end.current.value : null,
      responsibilities: responsibilities.current.value ? responsibilities.current.value : "",
      presently: present
    };
    // check required fields
    let date = volunteerDetails.presently ? true : (volunteerDetails.start && volunteerDetails.end) ? true : false
    if (!volunteerDetails.position || !volunteerDetails.project || !date) {
      return null
    } else {
      return volunteerDetails;
    }
  };

  const handleCheck = () => {
    setPresent(presently.current.checked);
  };

  // const handleFocus = () => {
  //   responsibilities.current.value = "";
  // };

  const resetFields = () => {
    position.current.value = "";
    project.current.value = "";
    location.current.value = "";
    start.current.value = "";
    end.current.value = "";
    responsibilities.current.value = "";
    presently.current.checked = false;
    setPresent(false);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let volunteerDet = populateFields()
    if (volunteerDet) {
      let newVolunteer = updateVolunteer(volunteerDet, null);
      setEdit(prevState => [...newVolunteer])
      resetFields()
      setEditMode(false)
    } else {
      console.log("Missing one or more required fields")
    }
  };

  const updateHandler = (__edit, mode) => {
    if (mode === "update") {
      position.current.value = __edit.position
      project.current.value = __edit.project;
      location.current.value = __edit.location;
      start.current.value = __edit.start;
      end.current.value = __edit.end;
      responsibilities.current.value = __edit.responsibilities;
      setPresent(prevState => __edit.present);
      setEditMode(true)
      setEditId(__edit.volunteerId)
    } else {
      let newVolunteer = deleteVolunteer(__edit);
      setEdit(prevState => [...newVolunteer])
      resetFields()
      setEditMode(false)
    }

  }

  const handleEditSubmit = (evt) => {
    evt.preventDefault()
    let volunteerDet = populateFields()
    if (volunteerDet) {
      let newVolunteer = updateVolunteer(volunteerDet, editId);
      setEdit(prevState => [...newVolunteer])
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
        <h2 className={styles.formHeader}>Volunteer Experience</h2>
        <p className={styles.formSummary}>
          Please include volunteer jobs you did in the past or are still doing
        </p>
        <hr className={styles.hr} />
        <button className={styles.skipButton}>skip this step</button>

        {/* Position/Title*/}
        <div className={styles.fieldWrapper}>
          <label htmlFor="position" className={styles.labelText}>Position: </label>
          <input
            ref={position}
            type="text"
            placeholder="Position/Title"
            name="position"
            id="position"
            required
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>

        {/* Company/Project */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="project" className={styles.labelText}>Project: </label>
          <input
            ref={project}
            type="text"
            placeholder="Company/Project"
            name="project"
            id="project"
            required
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>

        {/* location */}
        <div className={styles.fieldWrapper}>
          <label htmlFor="location" className={styles.labelText}>Location: </label>
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
        <div className={styles.fieldWrapper}>
          <label htmlFor="start" className={styles.labelText}>start date:</label>
          <input
            ref={start}
            type="date"
            placeholder="start"
            name="start"
            id="start"
          ></input>
          <span className={styles.requiredField}>*</span>
        </div>
        <div className={styles.fieldWrapper}>
          <label htmlFor="end" className={styles.labelText}>End:</label>
          <input
            ref={end}
            type="date"
            placeholder="end"
            name="end"
            id="end"
          ></input>
          {present ? "" : <span className={styles.requiredField}>*</span>}
        </div>

        <div className={styles.fieldWrapper}>
          <div className={styles.placeRight}>
            <input
              type="checkbox"
              name="present"
              ref={presently}
              onChange={handleCheck}
            />
            <label htmlFor="present">I currently volunteer here</label>
          </div>
        </div>
        {/* Responsibilities */}
        <div className={styles.fieldWrapper}>
          <textarea
            ref={responsibilities}
            id="responsibilities"
            name="responsibilities"
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <hr className={styles.hr} />

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE VOLUNTEER</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD VOLUNTEER</span>
          </button>}
        </div>
      </form>

      <section className={styles.editVolunteerContainer}>
        <span className={styles.summaryText}>Summary</span>
        {edit.map(_edit => (
          <div key={Math.random() * 1000} className={styles.editVolunteerWrapper}>
            <div>
              {/* first row */}
              <div className={styles.editInputLine}>
                <p>{_edit.position}</p>
              </div>
              {/* second row row */}
              <div className={styles.editInputLine}>
                <p>{_edit.project}</p>
              </div>
              {/* third row */}
              <div className={styles.editInputLine}>
                <p>{_edit.location}</p>
              </div>
              {/* fourth row */}
              <div className={styles.editInputLine}>
                {/* present ticked? */}
                {_edit.presently ? <p>I currently volunteer here</p> : <><p className={styles.volunteerStart}>{_edit.start}</p>
                  <p className={styles.volunteerEnd}>{_edit.end}</p>
                </>}
              </div>
              <p className={styles.editDetails}>{_edit.responsibilities}</p>

              <div className={styles.updateFieldsWrapper}>
                <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.iconBtn}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.iconBtn}><i className="fa fa-trash" aria-hidden="true"></i></button>
              </div>

            </div>
          </div >

        ))}
      </section>
    </>
  );
};

export default Volunteer;
