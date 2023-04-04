import styles from "../../static/styles/cvForm.module.css";
import { FinalizeContext } from "../../context/finalizeContext";
import { useRef, useContext, useState } from "react";

const Finalize = () => {
  const { updateFinalize, finalize, deleteFinalize } = useContext(FinalizeContext);

  const [edit, setEdit] = useState(finalize)
  const [editAward, setEditAward] = useState(false)
  const [editExtracurr, setEditExtracurr] = useState(false)
  const [editAcademicWork, setEditAcademicWork] = useState(false)
  const [editMembership, setEditMembership] = useState(false)
  const [editLanguage, setEditLanguage] = useState(false)
  const [editCustom, setEditCustom] = useState(false)

  const [oldEdit, setOldEdit] = useState("")

  let awardRef = useRef(null);
  let extraCurricularRef = useRef(null);
  let academicRef = useRef(null);
  let membershipRef = useRef(null);
  let languageRef = useRef(null);
  let customRef = useRef(null);

  const populateFields = () => {
    // setOldEdit(field)
    // console.log("old value", oldEdit)
    let award = awardRef.current.value ? awardRef.current.value : null;
    let extraCurricular = extraCurricularRef.current.value
      ? extraCurricularRef.current.value
      : null;
    let academicWork = academicRef.current.value
      ? academicRef.current.value
      : null;
    let membership = membershipRef.current.value
      ? membershipRef.current.value
      : null;
    let language = languageRef.current.value ? languageRef.current.value : null;
    let custom = customRef.current.value ? customRef.current.value : null;

    if (membership || custom || language || award || academicWork || extraCurricular) {
      let newFields = updateFinalize(
        award,
        extraCurricular,
        academicWork,
        membership,
        language,
        custom,
        oldEdit
      )
      // if (newFields) {
      return newFields
    } else {
      return null
    }
  }

  const handleAdd = ref => {
    setOldEdit("")
    let newFields = populateFields();
    if (newFields) {
      setEdit(newFields)
    } else {
      console.log("Invalid/empty fields")
    }
    ref.current.value = "";
    ref.current.focus();
  };

  const handleEdit = (ref) => {
    let newFields = populateFields();
    if (newFields) {
      setEdit(newFields)
      ref.current.value = "";
      ref.current.focus();
    } else {
      console.log("exists")
    }
    // console.log("setEditFunc", setEditFunc)
    // setEditFunc(false)
  }

  const updateHandler = (key, value) => {
    if (key === "award") {
      awardRef.current.value = value
      setEditAward(true)
      // setOldEdit(value)
    }
    if (key === "extraCurricular") {
      extraCurricularRef.current.value = value
      setEditExtracurr(true)
      // setOldEdit(value)
    }
    if (key === "academicWork") {
      academicRef.current.value = value
      setEditAcademicWork(true)
      // setOldEdit(value)
    }
    if (key === "membership") {
      membershipRef.current.value = value
      setEditMembership(true)
    }
    if (key === "language") {
      languageRef.current.value = value
      setEditLanguage(true)
      // setOldEdit(value)
    }
    if (key === "custom") {
      customRef.current.value = value
      setEditCustom(true)
      // setOldEdit(value)
    }
  }

  const deleteHandler = (key, value) => {
    // console.log("calling deleteFinalize", key, value)
    let newFields = deleteFinalize(key, value)
    setEdit(newFields)
  }

  return (
    <>
      <form className={styles.itemContainer}>
        <h2 className={styles.formHeader}>Additional Activities</h2>
        <p className={styles.formSummary}>(This section is optional)</p>
        <hr className={styles.hr} />

        {/* award */}
        <div className={styles.awardWrapper}>
          <label htmlFor="award" className={styles.labelText}>
            Awards/Honours:
          </label>
          <input
            ref={awardRef}
            type="text"
            placeholder="Award/Honour"
            name="award"
            id="award"
          ></input>
          <div className={styles.addAwardWrapper}>
            {editAward ? <button className={styles.addBtn} onClick={(evt) => { evt.preventDefault(); handleEdit(awardRef); setEditAward(false) }}>
              <span>Update award/honour</span>
            </button> : <button className={styles.addBtn} onClick={(evt) => { evt.preventDefault(); handleAdd(awardRef) }}>
              + <span>Add award/honour</span>
            </button>}
          </div>
        </div>

        {/* extraCurricular */}
        <div className={styles.extraCurricularWrapper}>
          <label htmlFor="extraCurricular" className={styles.labelText}>
            Extra-curricular Activities:
          </label>
          <input
            ref={extraCurricularRef}
            type="text"
            placeholder="Extracurricular activities"
            name="extraCurricular"
            id="extraCurricular"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editExtracurr ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(extraCurricularRef); setEditExtracurr(false) }}
            ><span>Update extracurricular activity</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(extraCurricularRef) }}
            >+ <span>Add extracurricular activity</span>
            </button>}
          </div>
        </div>

        {/* Academic work */}
        <div className={styles.extraCurricularWrapper}>
          <label htmlFor="academicWork" className={styles.labelText}>
            Academic Works:
          </label>
          <input
            ref={academicRef}
            type="text"
            placeholder="Academic works like Publications, Presentations, Conferences, Seminars, Citations, etc"
            name="academicWork"
            id="academicWork"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editAcademicWork ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(academicRef); setEditAcademicWork(false) }}
            ><span>Update Academic Work</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(academicRef) }}
            >+ <span>Add Academic Work</span>
            </button>}
          </div>
        </div>

        {/* Memberships/Professional bodies */}
        <div className={styles.extraCurricularWrapper}>
          <label htmlFor="memberships" className={styles.labelText}>
            Memberships:
          </label>
          <input
            ref={membershipRef}
            type="text"
            placeholder="Memberships, professional Institutions, e.t.c"
            name="memberships"
            id="memberships"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editMembership ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(membershipRef); setEditMembership(false) }}
            ><span>Update membership</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(membershipRef) }}
            >+ <span>Add membership</span>
            </button>}
          </div>
        </div>

        {/* language */}
        <div className={styles.extraCurricularWrapper}>
          <label htmlFor="language" className={styles.labelText}>
            Languages:
          </label>
          <input
            ref={languageRef}
            type="text"
            placeholder="language"
            name="language"
            id="language"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editLanguage ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(languageRef); setEditLanguage(false) }}
            ><span>Update language</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(languageRef) }}
            >+ <span>Add language</span>
            </button>}
          </div>
        </div>

        {/* custom */}
        <div className={styles.extraCurricularWrapper}>
          <label htmlFor="custom" className={styles.labelText}>
            Custom:
          </label>
          <input
            ref={customRef}
            type="text"
            placeholder="custom field"
            name="custom"
            id="custom"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editCustom ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(customRef); setEditCustom(false) }}
            ><span>Update custom</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(customRef) }}
            >+ <span>Add custom</span>
            </button>}
          </div>
        </div>

      </form>

      {
        (edit.membership.length > 0 || edit.custom.length > 0 || edit.academicWork.length > 0 || edit.language.length > 0 || edit.award.length > 0 || edit.extraCurricular.length > 0) && <section className={styles.editFinalizeContainer}>
          {/* render membership */}
          {edit.membership.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>Memberships and Professional bodies</div>
            <div>
              {edit.membership.map(_membership => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_membership}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_membership); updateHandler("membership", _membership) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("membership", _membership) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render custom */}
          {edit.custom.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>Custom fields</div>
            <div>
              {edit.custom.map(_custom => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_custom}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_custom); updateHandler("custom", _custom) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("custom", _custom) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render academic work */}
          {edit.academicWork.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>Academic works and Seminars</div>
            <div>
              {edit.academicWork.map(_academicWork => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_academicWork}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_academicWork); updateHandler("academicWork", _academicWork) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("academicWork", _academicWork) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render language */}
          {edit.language.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>language</div>
            <div>
              {edit.language.map(_language => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_language}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_language); updateHandler("language", _language) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("language", _language) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render award */}
          {edit.award.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>award</div>
            <div>
              {edit.award.map(_award => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_award}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_award); updateHandler("award", _award) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("award", _award) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render extra Curricular activities */}
          {edit.extraCurricular.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>extraCurricular</div>
            <div>
              {edit.extraCurricular.map(_extraCurricular => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{_extraCurricular}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_extraCurricular); updateHandler("extraCurricular", _extraCurricular) }}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("extraCurricular", _extraCurricular) }}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
        </section>
      }
    </>

  );
};

export default Finalize;
