import { createContext, useState } from "react";

export const EmploymentContext = createContext();

const EmploymentContextProvider = props => {
  let data = JSON.parse(localStorage.getItem("employmentArr"));
  let initialData = data ? data : []

  const [employment, setEmployment] = useState(initialData);

  const updateEmployment = employmentDetails => {
    setEmployment(prevState => [...prevState, employmentDetails]);
  };

  return (
    <EmploymentContext.Provider value={{ employment, updateEmployment }}>
      {props.children}
    </EmploymentContext.Provider>
  );
};

export default EmploymentContextProvider;
