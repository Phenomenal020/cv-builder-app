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

  const updateFinalize = (
    interest,
    software,
    language,
    award,
    publication,
    extraCurricular
  ) => {
    let newState = { ...finalize };
    console.log("before", finalize);
    if (interest) newState["interests"].push(interest);
    if (software) newState["software"].push(software);
    if (publication) newState["publication"].push(publication);
    if (language) newState["language"].push(language);
    if (award) newState["award"].push(award);
    if (extraCurricular) newState["extraCurricular"].push(extraCurricular);

    setFinalize(newState);
    console.log("after", finalize);
  };

  return (
    <FinalizeContext.Provider value={{ finalize, updateFinalize }}>
      {props.children}
    </FinalizeContext.Provider>
  );
};

export default FinalizeContextProvider;
