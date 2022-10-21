import styles from "../../static/styles/cvForm.module.css";
import { FinalizeContext } from "../../context/finalizeContext";
import { useRef, useContext } from "react";

const Finalize = () => {
  const { updateFinalize } = useContext(FinalizeContext);

  let interestsRef = useRef(null);
  let softwareRef = useRef(null);
  let publicationRef = useRef(null);
  let languageRef = useRef(null);
  let awardRef = useRef(null);
  let extraCurricularRef = useRef(null);

  const populateFields = () => {
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
    updateFinalize(
      interest,
      software,
      language,
      award,
      publication,
      extraCurricular
    );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    populateFields();
  };

  const handleAdd = ref => {
    populateFields();
    ref.current.value = "";
    ref.current.focus();
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
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
          <button className={styles.addBtn} onClick={() => handleAdd(awardRef)}>
            + <span>Add award/honour</span>
          </button>
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
          <button
            className={styles.addBtn}
            onClick={() => handleAdd(extraCurricularRef)}
          >
            + <span>Add extraCurricular activity</span>
          </button>
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
          <button
            className={styles.addBtn}
            onClick={() => handleAdd(interestsRef)}
          >
            + <span>Add interest</span>
          </button>
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
          <button
            className={styles.addBtn}
            onClick={() => handleAdd(languageRef)}
          >
            + <span>Add language</span>
          </button>
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
          <button
            className={styles.addBtn}
            onClick={() => handleAdd(publicationRef)}
          >
            + <span>Add Publication</span>
          </button>
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
          <button
            className={styles.addBtn}
            onClick={() => handleAdd(softwareRef)}
          >
            + <span>Add software</span>
          </button>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Finalize;
