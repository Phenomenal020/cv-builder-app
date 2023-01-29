import { createContext, useState } from "react";

export const CertificationContext = createContext();

const CertificationContextProvider = (props) => {
  const data = JSON.parse(localStorage.getItem("certificationArr"));
  let initialData = data ? data : [];

  const [certificationArr, setCertification] = useState(initialData);

  const updateCertification = (certificationDetails, id) => {
    // submit first certification
    if (id === null && certificationArr.length === 0) {
      setCertification((prevState) => [certificationDetails, ...prevState]);
      return [certificationDetails, ...certificationArr];
    }
    // submit subsequent certifications
    if (id === null && certificationArr.length > 0) {
      setCertification((prevState) => [certificationDetails, ...prevState]);
      return [certificationDetails, ...certificationArr];
    }
    // update certification
    if (id) {
      let newCertArray = [...certificationArr];
      let foundIndex = newCertArray.findIndex(
        (_certification) => _certification.certId === id
      );
      if (foundIndex > -1) {
        newCertArray[foundIndex] = certificationDetails;
        setCertification(newCertArray);
      } else {
        console.log("not found");
      }
      return newCertArray;
    }
  };

  const deleteCertification = (certDetails) => {
    let newCertArray = [...certificationArr];
    const filteredArray = newCertArray.filter(
      (_certification) => _certification.certId !== certDetails.certId
    );
    setCertification(filteredArray);
    return filteredArray;
  };

  return (
    <CertificationContext.Provider
      value={{ certificationArr, updateCertification, deleteCertification }}
    >
      {props.children}
    </CertificationContext.Provider>
  );
};

export default CertificationContextProvider;
