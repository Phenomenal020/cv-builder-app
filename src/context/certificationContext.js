import { createContext, useState } from "react";

export const CertificationContext = createContext();

const CertificationContextProvider = props => {
  const data = JSON.parse(localStorage.getItem("certificationArr"));
  let initialData = data ? data : [];

  const [certificationArr, setCertification] = useState(initialData);

  const updateCertification = certificationDetails => {
    setCertification(prevState => [...prevState, certificationDetails]);
  };

  return (
    <CertificationContext.Provider
      value={{ certificationArr, updateCertification }}
    >
      {props.children}
    </CertificationContext.Provider>
  );
};

export default CertificationContextProvider;
