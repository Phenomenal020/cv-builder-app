import { createContext, useState } from "react";

export const EducationContext = createContext();

const EducationContextProvider = props => {
  let data = JSON.parse(localStorage.getItem("educationArr"));
  // console.log("data", data);
  let initialData = data ? data : [];

  // let initialData = data ? data : [];
  const [education, setEducation] = useState(initialData);

  const updateEducation = educationDetails => {
    // console.log("updating education", education);
    setEducation(prevState => [...prevState, educationDetails]);
    // console.log("updating education after", education);
  };

  return (
    <EducationContext.Provider value={{ education, updateEducation }}>
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
