import styles from "../../static/styles/cvForm.module.css";
import { useRef, useContext, useState } from "react";
import { VolunteerContext } from "../../context/volunteerContext";

const Volunteer = () => {
  const defaultMsg =
    "Add a brief description of what you did/do as a volunteer Eg,Taught Ultrasound for free";

  const { updateVolunteer } = useContext(VolunteerContext);
  const [present, setPresent] = useState(false);
  const [msg, setMsg] = useState(defaultMsg);

  const position = useRef(null);
  const project = useRef(null);
  const location = useRef(null);
  const start = useRef(null);
  const end = useRef(null);
  const responsibilities = useRef(null);
  const presently = useRef(null);

  const populateFields = () => {
    const volunteerDetails = {
      position: position.current.value ? position.current.value : null,
      project: project.current.value ? project.current.value : null,
      location: location.current.value ? location.current.value : null,
      start: start.current.value ? start.current.value : null,
      end: end.current.value ? end.current.value : null,
      responsibilities:
        responsibilities.current.value !== defaultMsg &&
        responsibilities.current.value
          ? responsibilities.current.value
          : null,
      presently: present
    };
    return volunteerDetails;
  };

  const handleChange = evt => {
    setMsg(evt.target.value);
  };

  const handleCheck = () => {
    setPresent(presently.current.checked);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateVolunteer(populateFields());
  };

  const handleAdd = evt => {
    evt.preventDefault();
    updateVolunteer(populateFields());
    position.current.value = "";
    project.current.value = "";
    location.current.value = "";
    start.current.value = "";
    end.current.value = "";
    responsibilities.current.value = "";
    setPresent(false);
    setMsg(defaultMsg);
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>Volunteer Experience</h2>
      <p className={styles.formSummary}>
        Please include volunteer jobs you did in the past or are still doing
      </p>
      <hr className={styles.hr} />
      <button className={styles.skipButton}>skip this step</button>
      {/* Position/Title*/}
      <div>
        <input
          ref={position}
          type="text"
          placeholder="Position/Title"
          name="position"
          id="position"
          required
        ></input>
      </div>
      {/* Company/Project */}
      <div>
        <input
          ref={project}
          type="text"
          placeholder="Company/Project"
          name="project"
          id="project"
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
      F{/* start/end dates */}
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
          />
          <label htmlFor="present">I currently volunteer here</label>
        </div>
      </div>
      {/* Responsibilities */}
      <textarea
        ref={responsibilities}
        id="responsibilities"
        name="responsibilities"
        rows="10"
        cols="50"
        value={msg}
        onChange={handleChange}
      ></textarea>
      <hr className={styles.hr} />
      <div className={styles.addWrapper}>
        <button className={styles.addBtn} onClick={handleAdd}>
          + <span>ADD VOLUNTEER</span>
        </button>
      </div>
      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Volunteer;
