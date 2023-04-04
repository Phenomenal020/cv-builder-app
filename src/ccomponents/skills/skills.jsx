import styles from "../../static/styles/cvForm.module.css";
import { useRef, useContext } from "react";
import { SkillsContext } from "../../context/skillsContext";
import { useState } from "react";

const Skills = () => {
  const { skills, updateSkills, deleteSkills } = useContext(SkillsContext);
  // edits
  const [edit, setEdit] = useState(skills)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  // references
  const skill = useRef(null);
  const progress = useRef(null);
  // populate relevant fields
  const populateFields = () => {
    // console.log(progress.current.value > 0)
    const skillDetails = {
      skillId: Math.random() * 10000,
      skill: skill.current.value ? skill.current.value : null,
      progress:
        progress.current.value > 0
          ? progress.current.value
          : null
    };
    // check required fields
    if (!(skillDetails.skill && skillDetails.progress)) {
      return null
    } else {
      return skillDetails
    }
  }
  // reset fields
  const resetFields = () => {
    skill.current.value = "";
    progress.current.value = 50;
    setEditId(null)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let skillDet = populateFields()
    if (skillDet) {
      let newSkills = updateSkills(skillDet, null);
      setEdit(prevState => [...newSkills])
      resetFields()
      setEditMode(false)
      setEditId(null)
    } else {
      console.log("Missing one or more required fields")
    }
  };

  const updateHandler = (__edit, mode) => {
    if (mode === "update") {
      skill.current.value = __edit.skill
      progress.current.value = __edit.progress;
      setEditMode(true)
      setEditId(__edit.skillId)
    } else {
      let newSkills = deleteSkills(__edit);
      setEdit(prevState => [...newSkills])
      resetFields()
      setEditMode(false)
      setEditId(null)
    }

  }

  const handleEditSubmit = (evt) => {
    evt.preventDefault()
    let skillDet = populateFields()
    if (skillDet) {
      let newSkills = updateSkills(skillDet, editId);
      setEdit(prevState => [...newSkills])
      resetFields()
      setEditMode(false)
      setEditId(null)
    } else {
      console.log("Missing one or more required fields")
    }
  }

  return (
    <>
      <form className={styles.itemContainer} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Skills</h2>
        <p className={styles.formSummary}>
          Add skills you possess relevant to the job you're applying for. This
          section is optional
        </p>
        <hr className={styles.hr} />

        {/* skill */}
        <div className={styles.skillWrapper}>
          <div className={styles.skillTextWrapper}>
            <label htmlFor="skill" className={styles.labelText}>Skill: <span className={styles.requiredField}>*</span></label>
            <input
              className={styles.skill}
              ref={skill}
              type="text"
              placeholder="Skill"
              name="skill"
              id="skill"
              required
            ></input>
          </div>
          <div className={styles.progressWrapper}>
            <label htmlFor="progress" className={styles.labelText}>Progress: </label>
            <input
              type="number"
              min="10"
              max="100"
              defaultValue="50"
              step="10"
              name="progress"
              required
              ref={progress}
              className={styles.skillProgress}
            ></input>
          </div>
        </div>



        <hr className={styles.hr} />

        <div className={styles.addWrapper}>
          {editMode ? <button className={styles.addBtn} onClick={handleEditSubmit}>
            + <span>UPDATE SKILL</span>
          </button> : <button className={styles.addBtn} onClick={handleSubmit}>
            + <span>ADD SKILL</span>
          </button>}
        </div>

      </form>

      {skills.length > 0 && <section className={styles.editSkillContainer}>
        <span className={styles.summaryText}>Summary</span>
        <div key={Math.random() * 1000} className={styles.editSkillWrapper}>
          <div>
            {edit.map(_edit => (
              <div className={styles.editSkillRow} key={Math.random() * 100000}>
                <p className={styles.editSkill}>{_edit.skill}</p>
                <p className={styles.editSkillsProgress}>{_edit.progress}%</p>
                <div className={styles.updateSkillsWrapper}>
                  <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.updateSkill}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                  <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.updateSkill}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>}

    </>
  );
};

export default Skills;
