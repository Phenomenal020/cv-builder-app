import styles from "../../static/styles/cvForm.module.css";
import { useContext, useRef, useState } from "react";
import { CertificationContext } from "../../context/certificationContext";
import { formatMonth } from "../helperComponents/helpers";

const Certifications = () => {

  const defaultMsg =
    "Include what you learnt at the end of the Training and how it has helped you in your career";

  const { certificationArr, updateCertification, deleteCertification } = useContext(CertificationContext);

  const [edit, setEdit] = useState(certificationArr)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)

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
      certId: Math.random() * 10000,
      certification: certificate.current.value
        ? certificate.current.value
        : null,
      // if checked, use current month
      year: checked
        ? d.getMonth()
        : (year.current.value
          ? year.current.value
          : null),
      other:
        description.current.value.trim() !== defaultMsg && description.current.value
          ? description.current.value
          : null
    };
    // check required fields
    if (!certDetails.certification) {
      return null
    } else {
      return certDetails
    }
  };

  const handleFocus = () => {
    description.current.value = "";
  };

  const handleSkip = () => {
    return;
  };

  const resetFields = () => {
    certificate.current.value = "";
    year.current.value = "2022-08";
    description.current.value = defaultMsg
    // setMsg(defaultMsg);
    setChecked(false);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let certDetails = populateFields()
    if (certDetails) {
      let newCert = updateCertification(certDetails, null);
      setEdit(prevState => [...newCert])
      resetFields()
      setEditMode(false)
    } else {
      console.log("Missing one or more required fields")
    }
  };

  const removeYear = (yearAndMonth) => {
    console.log("yearAndMonth", yearAndMonth)
    if (typeof (yearAndMonth) === "number") {
      return yearAndMonth + 1
    }
    let details = yearAndMonth.split("-")
    return details[1]
  }

  const updateHandler = (__edit, mode) => {
    if (mode === "update") {
      const d = new Date()
      let monthOnly = removeYear(__edit.year)
      // console.log("edit year", __edit.year)
      // console.log("edit other", __edit.other)
      certificate.current.value = __edit.certification
      year.current.value = `${d.getFullYear()}-${monthOnly}`;
      description.current.value = __edit.other;
      setEditMode(true)
      setEditId(__edit.certId)
    } else {
      // delete
      let newCert = deleteCertification(__edit)
      setEdit(prevState => [...newCert])
      resetFields()
      setEditMode(false)
    }
  }

  const handleEditSubmit = (evt) => {
    evt.preventDefault()
    let certDetails = populateFields()
    if (certDetails) {
      let newCert = updateCertification(certDetails, editId);
      setEdit(prevState => [...newCert])
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
            required
          ></input>
          <span className={styles.requiredField}>*</span>
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
          <span className={styles.requiredField}>*</span>
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
          <label htmlFor="present">Present</label>
        </div>

        <div className={styles.headlineWrapper}>
          <textarea
            ref={description}
            id="description"
            name="description"
            rows="10"
            cols="50"
            defaultValue={msg}
            onFocus={() => {
              setMsg(""); handleFocus()
            }}
            onChange={handleChange}
          ></textarea>
        </div>

        <hr className={styles.hr} />

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE CERTIFICATION/TRAINING</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD CERTIFICATION/TRAINING</span>
          </button>}
        </div>

      </form>

      <section className={styles.editCertContainer}>
        {edit.map(_edit => (
          <div key={Math.random() * 1000} className={styles.editCertWrapper}>
            <div>
              {/* first row */}
              <div className={styles.editDoubleRow}>
                <p className={styles.editCertHeader}>{_edit.certification}</p>
                <p className={styles.editCertYear}>{formatMonth(_edit.year)}</p>
              </div>
              {/* second row */}
              <p className={styles.editCertDetails}>{_edit.other}</p>
              <div className={styles.updateFieldsWrapper}>
                <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.updateBtn}>update certification</button>
                <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.updateBtn}>delete certification</button>
              </div>

            </div>
          </div>
        ))}
      </section>

    </>
  );
};

export default Certifications;
