import { createContext, useState } from "react";

export const FinalizeContext = createContext();

const FinalizeContextProvider = props => {
  const data = JSON.parse(localStorage.getItem("finalizeObj"));
  let initialData = data
    ? data
    : {
        interests: [],
        software: [],
        publication: [],
        language: [],
        award: [],
        extraCurricular: []
      };
  const [finalize, setFinalize] = useState(initialData);

      // check if field already exists
      // if it does, return false
      // if it doesn't, update finalize

  const updateFinalize = (
    interest,
    software,
    language,
    award,
    publication,
    extraCurricular
  ) => {
    let newState = { ...finalize };
    // console.log("before", finalize);
    // check if same field
    if (interest) {
      let checkInterest = fieldExists("interests", interest)
      if(!checkInterest) {
        newState["interests"].push(interest);
      } else {
        console.log(`${interest} already exists`)
        return false
      }
    } 
    if (software) {
      let checkSoftware = fieldExists("software", software)
      if(!checkSoftware) {
        newState["software"].push(software);
      } else {
        console.log(`${software}already exists`)
        return false
      }
    } 
    if (publication) {
      let checkPublication = fieldExists("publication", publication)
      if(!checkPublication) {
        newState["publication"].push(publication);
      } else {
        console.log(`${publication}already exists`)
        return false
      }
    } 
    if (language) {
      let checkLanguage = fieldExists("language", language)
      if(!checkLanguage) {
        newState["language"].push(language);
      } else {
        console.log(`${language}already exists`)
        return false
      }
    }
    if (award) {
      let checkAward = fieldExists("award", award)
      if(!checkAward) {
        newState["award"].push(award);
      } else {
        console.log(`${award}already exists`)
        return false
      }
    } 
    if (extraCurricular) {
      let checkExtraCurricular = fieldExists("extraCurricular", extraCurricular)
      if(!checkExtraCurricular) {
        newState["extraCurricular"].push(extraCurricular);
      } else {
        console.log(`${extraCurricular}already exists`)
        return false
      }
    } 

    setFinalize(newState);
    return newState
    // console.log("after", finalize);
  };

  const fieldExists = (key, value) => {
    let foundIndex = finalize[key].indexOf(value)
    if(foundIndex > -1) {
      return true
    } else {
      return false
    }
  }

  return (
    <FinalizeContext.Provider value={{ finalize, updateFinalize }}>
      {props.children}
    </FinalizeContext.Provider>
  );
};

export default FinalizeContextProvider;
