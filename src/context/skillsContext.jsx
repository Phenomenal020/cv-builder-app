import { createContext, useState } from "react";

export const SkillsContext = createContext();

const SkillsContextProvider = props => {
  let data = JSON.parse(localStorage.getItem("skillsArr"));
  let initialData = data ? data : [];

  const [skills, setSkills] = useState(initialData);

  const updateSkills = skillsDetails => {
    setSkills(prevState => [...prevState, skillsDetails]);
  };

  return (
    <SkillsContext.Provider value={{ skills, updateSkills }}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
