import styles from "../../static/styles/cvForm.module.css";
import { useContext, useRef, useState } from "react";
import { CertificationContext } from "../../context/certificationContext";

const Certifications = () => {
  const defaultMsg =
    "Include what you learnt at the end of the Training and how it has helped you in your career";
  const { updateCertification } = useContext(CertificationContext);
  const [msg, setMsg] = useState(defaultMsg);
  const [checked, setChecked] = useState(false);

  const certificate = useRef(null);
  const year = useRef(null);
  const description = useRef(null);

  const handleCheck = () => {
    setChecked(check => !check);
  };

  const handleChange = evt => {
    setMsg(evt.target.value);
  };

  const populateFields = () => {
    const d = new Date();
    const certDetails = {
      certification: certificate.current.value
        ? certificate.current.value
        : null,
      year: checked
        ? d.getMonth()
        : year.current.value
        ? year.current.value
        : null,
      other:
        description.current.value !== defaultMsg && description.current.value
          ? description.current.value
          : ""
    };
    return certDetails;
  };

  const handleSkip = () => {
    return;
  };

  const handleAdd = evt => {
    evt.preventDefault();
    updateCertification(populateFields());
    certificate.current.value = "";
    year.current.value = "2022-08";
    setMsg(defaultMsg);
    setChecked(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateCertification(populateFields());
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>
        Continuing Education, Professional development and Additional training
      </h2>
      <p className={styles.formSummary}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <hr className={styles.hr} />

      <button className={styles.skipButton} onClick={handleSkip}>
        skip this step
      </button>

      {/* Certification name */}
      <div className={styles.certificationWrapper}>
        <input
          ref={certificate}
          type="text"
          placeholder="Certification/Training"
          name="certification"
          id="certification"
        ></input>
      </div>

      {/* Date obtained */}
      <div className={styles.certificationWrapper}>
        <input
          ref={year}
          type="month"
          name="year"
          id="year"
          defaultValue="2022-08"
        ></input>
      </div>

      <div className={styles.presentWrapper}>
        <input
          type="checkbox"
          onChange={handleCheck}
          id="present"
          name="present"
          value="present"
          checked={checked}
        />
        <label htmlFor="present">present</label>
      </div>

      <div className={styles.headlineWrapper}>
        <textarea
          ref={description}
          id="description"
          name="description"
          rows="10"
          cols="50"
          value={msg}
          onChange={handleChange}
        ></textarea>
      </div>

      <hr className={styles.hr} />

      <div className={styles.addWrapper}>
        <button className={styles.addBtn} onClick={handleAdd}>
          + <span>ADD CERTIFICATION/TRAINING</span>
        </button>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Certifications;
