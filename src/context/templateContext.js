import { createContext, useState } from "react";

export const TemplateContext = createContext();

const TemplateContextProvider = (props) => {
  const [template, setTemplate] = useState(1);

  const handleNextTemplate = () => {
    if (template == 2) {
      return;
    }
    setTemplate((prev) => prev + 1);
  };

  const handlePrevTemplate = () => {
    if (template == 1) {
      return;
    }
    setTemplate((prev) => prev - 1);
  };

  return (
    <TemplateContext.Provider
      value={{ handleNextTemplate, handlePrevTemplate, template }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
//
