import styles from "../../static/styles/cvForm.module.css";
import { useRef, useContext } from "react";
import { SkillsContext } from "../../context/skillsContext";

const Skills = () => {
  const { updateSkills } = useContext(SkillsContext);
  const skill = useRef(null);
  const progress = useRef(null);

  const handleSubmit = evt => {
    evt.preventDefault();
    const skillDetails = {
      skill: skill.current.value ? skill.current.value : null,
      progress:
        progress.current.value !== 0 && progress.current.value
          ? progress.current.value
          : null
    };
    updateSkills(skillDetails);
    skill.current.value = "";
    progress.current.value = 50;
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>Skills</h2>
      <p className={styles.formSummary}>
        Add skills you possess relevant to the job you're applying for. This
        section is optional
      </p>
      <hr className={styles.hr} />

      <button className={styles.skipButton}>skip this step</button>

      {/* skill */}
      <div className={styles.skillWrapper}>
        <input
          className={styles.skill}
          ref={skill}
          type="text"
          placeholder="Skill"
          name="skill"
          id="skill"
        ></input>
        <input
          type="number"
          min="0"
          max="100"
          defaultValue="50"
          step="10"
          ref={progress}
          className={styles.skillProgress}
        ></input>
      </div>

      <hr className={styles.hr} />

      <div className={styles.addWrapper} onClick={handleSubmit}>
        <button className={styles.addBtn}>
          + <span>ADD SKILL</span>
        </button>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Skills;
