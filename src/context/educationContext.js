import { createContext, useState } from "react";

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
  let data = JSON.parse(localStorage.getItem("educationArr"));
  // console.log("data", data);
  let initialData = data ? data : [];

  // let initialData = data ? data : [];
  const [education, setEducation] = useState(initialData);

  const updateEducation = (educationDetails, id) => {
    // submit first Education
    if (id === null && education.length === 0) {
      setEducation((prevState) => [educationDetails, ...prevState]);
      return [educationDetails, ...education];
    }
    // submit subsequent education
    if (id === null && education.length > 0) {
      setEducation((prevState) => [educationDetails, ...prevState]);
      return [educationDetails, ...education];
    }
    // update education
    if (id) {
      let newEducationArray = [...education];
      let foundIndex = newEducationArray.findIndex(
        (_education) => _education.educationId === id
      );
      if (foundIndex > -1) {
        newEducationArray[foundIndex] = educationDetails;
        setEducation(newEducationArray);
      } else {
        console.log("not found");
      }
      return newEducationArray;
    }
  };

  const deleteEducation = (educationDetails) => {
    let newEducationArray = [...education];
    const filteredArray = newEducationArray.filter(
      (_education) => _education.educationId !== educationDetails.educationId
    );
    setEducation(filteredArray);
    return filteredArray;
  };

  return (
    <EducationContext.Provider
      value={{ education, updateEducation, deleteEducation }}
    >
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
