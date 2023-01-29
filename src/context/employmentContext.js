import { createContext, useState } from "react";

export const EmploymentContext = createContext();

const EmploymentContextProvider = (props) => {
  let data = JSON.parse(localStorage.getItem("employmentArr"));
  let initialData = data ? data : [];

  const [employment, setEmployment] = useState(initialData);

  const updateEmployment = (employmentDetails, id) => {
    // submit first employment
    if (id === null && employment.length === 0) {
      setEmployment((prevState) => [employmentDetails, ...prevState]);
      return [employmentDetails, ...employment];
    }
    // submit subsequent employment
    if (id === null && employment.length > 0) {
      setEmployment((prevState) => [employmentDetails, ...prevState]);
      return [employmentDetails, ...employment];
    }
    // update employment
    if (id) {
      let newEmploymentArr = [...employment];
      let foundIndex = newEmploymentArr.findIndex(
        (employment) => employment.jobId === id
      );
      if (foundIndex > -1) {
        newEmploymentArr[foundIndex] = employmentDetails;
        setEmployment(newEmploymentArr);
      } else {
        console.log("not found");
      }
      return newEmploymentArr;
    }
  };

  const deleteEmployment = (employmentDetails) => {
    let newEmploymentArr = [...employment];
    const filteredArray = newEmploymentArr.filter(
      (_emmployment) => _emmployment.jobId !== employmentDetails.jobId
    );
    setEmployment(filteredArray);
    return filteredArray;
  };

  return (
    <EmploymentContext.Provider value={{ employment, updateEmployment, deleteEmployment }}>
      {props.children}
    </EmploymentContext.Provider>
  );
};

export default EmploymentContextProvider;
