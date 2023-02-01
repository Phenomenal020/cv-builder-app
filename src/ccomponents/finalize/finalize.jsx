import styles from "../../static/styles/cvForm.module.css";
import { FinalizeContext } from "../../context/finalizeContext";
import { useRef, useContext, useState } from "react";

const Finalize = () => {
  const { updateFinalize, finalize, deleteFinalize } = useContext(FinalizeContext);

  const [edit, setEdit] = useState(finalize)
  const [editAward, setEditAward] = useState(false)
  const [editInterest, setEditInterest] = useState(false)
  const [editPublication, setEditPublication] = useState(false)
  const [editSoftware, setEditSoftware] = useState(false)
  const [editLanguage, setEditLanguage] = useState(false)
  const [editExtracurr, setEditExtracurr] = useState(false)

  const [oldEdit, setOldEdit] = useState("")

  let interestsRef = useRef(null);
  let softwareRef = useRef(null);
  let publicationRef = useRef(null);
  let languageRef = useRef(null);
  let awardRef = useRef(null);
  let extraCurricularRef = useRef(null);

  const populateFields = () => {
    // setOldEdit(field)
    // console.log("old value", oldEdit)
    let interest = interestsRef.current.value
      ? interestsRef.current.value
      : null;
    let software = softwareRef.current.value ? softwareRef.current.value : null;
    let language = languageRef.current.value ? languageRef.current.value : null;
    let award = awardRef.current.value ? awardRef.current.value : null;
    let publication = publicationRef.current.value
      ? publicationRef.current.value
      : null;
    let extraCurricular = extraCurricularRef.current.value
      ? extraCurricularRef.current.value
      : null;
    if (interest || software || language || award || publication || extraCurricular) {
      let newFields = updateFinalize(
        interest,
        software,
        language,
        award,
        publication,
        extraCurricular, oldEdit
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
    if (key === "interests") {
      interestsRef.current.value = value
      setEditInterest(true)
    }
    if (key === "software") {
      softwareRef.current.value = value
      setEditSoftware(true)
      // setOldEdit(value)
    }
    if (key === "publication") {
      publicationRef.current.value = value
      setEditPublication(true)
      // setOldEdit(value)
    }
    if (key === "language") {
      languageRef.current.value = value
      setEditLanguage(true)
      // setOldEdit(value)
    }
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
  }

  const deleteHandler = (key, value) => {
    // console.log("calling deleteFinalize", key, value)
    let newFields = deleteFinalize(key, value)
    setEdit(newFields)
  }

  return (
    <>
      <form className={styles.itemContainer}>
        <h2 className={styles.formHeader}>Finalize</h2>
        <p className={styles.formSummary}>This section is optional</p>
        <hr className={styles.hr} />
        <button className={styles.skipButton}>skip this step</button>

        {/* award */}
        <div className={styles.awardWrapper}>
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
            ><span>Update extra curricular activity</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(extraCurricularRef) }}
            >+ <span>Add extra curricular activity</span>
            </button>}
          </div>
        </div>

        {/* interests */}
        <div className={styles.extraCurricularWrapper}>
          <input
            ref={interestsRef}
            type="text"
            placeholder="interests"
            name="interests"
            id="interests"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editInterest ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(interestsRef); setEditInterest(false) }}
            ><span>Update interest</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(interestsRef) }}
            >+ <span>Add interest</span>
            </button>}
          </div>
        </div>

        {/* language */}
        <div className={styles.extraCurricularWrapper}>
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

        {/* Publication */}
        <div className={styles.extraCurricularWrapper}>
          <input
            ref={publicationRef}
            type="text"
            placeholder="Publication"
            name="Publication"
            id="Publication"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editPublication ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(publicationRef); setEditPublication(false) }}
            ><span>Update Publication</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(publicationRef) }}
            >+ <span>Add Publication</span>
            </button>}

          </div>
        </div>

        {/* Software */}
        <div className={styles.extraCurricularWrapper}>
          <input
            ref={softwareRef}
            type="text"
            placeholder="software"
            name="software"
            id="software"
          ></input>
          <div className={styles.addExtraCurricularWrapper}>
            {editSoftware ? <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleEdit(softwareRef); setEditSoftware(false) }}
            ><span>Update software</span>
            </button> : <button
              className={styles.addBtn}
              onClick={(evt) => { evt.preventDefault(); handleAdd(softwareRef) }}
            >+ <span>Add software</span>
            </button>}

          </div>
        </div>

      </form>

      {
        (edit.interests.length > 0 || edit.software.length > 0 || edit.publication.length > 0 || edit.language.length > 0 || edit.award.length > 0 || edit.extraCurricular.length > 0) && <section className={styles.editFinalizeContainer}>
          {/* render interests */}
          {edit.interests.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>interests</div>
            <div>
              {edit.interests.map(interest => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{interest}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(interest); updateHandler("interests", interest) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("interests", interest) }}>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render software */}
          {edit.software.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>software</div>
            <div>
              {edit.software.map(software => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{software}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(software); updateHandler("software", software) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("software", software) }}>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render publication */}
          {edit.publication.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>publication</div>
            <div>
              {edit.publication.map(publication => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{publication}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(publication); updateHandler("publication", publication) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("publication", publication) }}>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render language */}
          {edit.language.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>language</div>
            <div>
              {edit.language.map(language => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{language}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(language); updateHandler("language", language) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("language", language) }}>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render award */}
          {edit.award.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>award</div>
            <div>
              {edit.award.map(award => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{award}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(award); updateHandler("award", award) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("award", award) }}>delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>}
          {/* render extra Curricular activities */}
          {edit.extraCurricular.length > 0 && <div className={styles.editFinalizeWrapper}>
            <div className={styles.editHeader}>extraCurricular</div>
            <div>
              {edit.extraCurricular.map(extraCurricular => (
                <div key={Math.random() * 10000} className={styles.editField}>
                  <p>{extraCurricular}</p>
                  <div className={styles.updateFinalizeWrapper}>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(extraCurricular); updateHandler("extraCurricular", extraCurricular) }}>update</button>
                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("extraCurricular", extraCurricular) }}>delete</button>
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
