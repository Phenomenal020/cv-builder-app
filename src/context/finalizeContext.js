import { createContext, useState } from "react";

export const FinalizeContext = createContext();

const FinalizeContextProvider = (props) => {
  const data = JSON.parse(localStorage.getItem("finalizeObj"));
  let initialData = data
    ? data
    : {
        interests: [],
        software: [],
        publication: [],
        language: [],
        award: [],
        extraCurricular: [],
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
    extraCurricular,
    oldValue
  ) => {
    let newState = { ...finalize };
    // console.log("before", finalize);
    // check if same field
    if (interest) {
      let checkInterest = fieldExists("interests", interest);
      if (!checkInterest) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          // console.log("checking if I found old value", oldValue);
          let index = newState["interests"].indexOf(oldValue);
          // console.log("old value found?", oldValue);
          newState["interests"].splice(index, 1, interest);
          // console.log("updated state", newState);
        } else {
          newState["interests"].push(interest);
        }
      } else {
        console.log(`${interest} already exists`);
        return false;
      }
    }
    if (software) {
      let checkSoftware = fieldExists("software", software);
      if (!checkSoftware) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          let index = newState["software"].indexOf(oldValue);
          newState["software"].splice(index, 1, software);
        } else {
          newState["software"].push(software);
        }
      } else {
        console.log(`${software}already exists`);
        return false;
      }
    }
    if (publication) {
      let checkPublication = fieldExists("publication", publication);
      if (!checkPublication) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          let index = newState["publication"].indexOf(oldValue);
          newState["publication"].splice(index, 1, publication);
        } else {
          newState["publication"].push(publication);
        }
      } else {
        console.log(`${publication}already exists`);
        return false;
      }
    }
    if (language) {
      let checkLanguage = fieldExists("language", language);
      if (!checkLanguage) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          let index = newState["language"].indexOf(oldValue);
          newState["language"].splice(index, 1, language);
        } else {
          newState["language"].push(language);
        }
      } else {
        console.log(`${language}already exists`);
        return false;
      }
    }
    if (award) {
      let checkAward = fieldExists("award", award);
      if (!checkAward) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          let index = newState["award"].indexOf(oldValue);
          newState["award"].splice(index, 1, award);
        } else {
          newState["award"].push(award);
        }
      } else {
        console.log(`${award}already exists`);
        return false;
      }
    }
    if (extraCurricular) {
      let checkExtraCurricular = fieldExists(
        "extraCurricular",
        extraCurricular
      );
      if (!checkExtraCurricular) {
        // console.log("field does not exist");
        // let index = arr.indexOf(value);
        if (oldValue) {
          let index = newState["extraCurricular"].indexOf(oldValue);
          newState["extraCurricular"].splice(index, 1, extraCurricular);
        } else {
          newState["extraCurricular"].push(extraCurricular);
        }
      } else {
        console.log(`${extraCurricular}already exists`);
        return false;
      }
    }

    setFinalize(newState);
    return newState;
    // console.log("after", finalize);
  };

  const deleteFinalize = (key, value) => {
    let newState = { ...finalize };
    let index = newState[key].indexOf(value);
    // console.log("deleteIndex", index)
    // console.log("newState[key", newState[key])
    newState[key].splice(index, 1);
    setFinalize(newState);
    // console.log("after delete", finalize)
    return newState;
    // console.log("after", finalize);
  };

  const fieldExists = (key, value) => {
    let foundIndex = finalize[key].indexOf(value);
    if (foundIndex > -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <FinalizeContext.Provider
      value={{ finalize, updateFinalize, deleteFinalize }}
    >
      {props.children}
    </FinalizeContext.Provider>
  );
};

export default FinalizeContextProvider;
