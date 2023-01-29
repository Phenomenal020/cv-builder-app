import { createContext, useState } from "react";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
  let data = JSON.parse(localStorage.getItem("skillsArr"));
  let initialData = data ? data : [];

  const [skills, setSkills] = useState(initialData);

  const updateSkills = (skillsDetails, id) => {
    // submit first skill
    if (id === null && skills.length === 0) {
      setSkills((prevState) => [...prevState, skillsDetails]);
      return [skillsDetails];
    }
    // submit subsequent skills
    if (id === null && skills.length > 0) {
      setSkills((prevState) => [...prevState, skillsDetails]);
      return [...skills, skillsDetails];
    }
    // update skills
    if (id) {
      let newSkillsArr = [...skills];
      let foundIndex = newSkillsArr.findIndex(
        (_skill) => _skill.skillId === id
      );
      if (foundIndex > -1) {
        newSkillsArr[foundIndex] = skillsDetails;
        setSkills(newSkillsArr);
      } else {
        console.log("not found");
      }
      // console.log("after first skill", newSkillsArr)
      return newSkillsArr;
    }
  };

  const deleteSkills = (skillDetails) => {
    let newSkillsArray = [...skills];
    const filteredArray = newSkillsArray.filter(
      (_skill) => _skill.skillId !== skillDetails.skillId
    );
    setSkills(filteredArray);
    return filteredArray;
  };

  return (
    <SkillsContext.Provider value={{ skills, updateSkills, deleteSkills }}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
