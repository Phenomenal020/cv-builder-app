import { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [index, setIndex] = useState(1);

  const handleSkip = () => {
    setIndex((prev) => prev + 1);
  };

  return (
    <PageContext.Provider value={{ index, setIndex, handleSkip }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
