import { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactContextProvider = props => {
  const data = JSON.parse(localStorage.getItem("contactObj"));
  let initialData = data ? data : {};

  const [contact, setContact] = useState(initialData);

  const updateContact = contactDetails => {
    setContact(contactDetails);
  };

  return (
    <ContactContext.Provider value={{ contact, updateContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
