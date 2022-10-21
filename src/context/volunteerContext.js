import { createContext, useState } from "react";

export const VolunteerContext = createContext();

const VolunteerContextProvider = props => {
  const data = JSON.parse(localStorage.getItem("volunteerArr"));
  let initialData = data ? data : [];

  const [volunteer, setVolunteer] = useState(initialData);

  const updateVolunteer = volunteerDetails => {
    setVolunteer(prevState => [...prevState, volunteerDetails]);
  };

  return (
    <VolunteerContext.Provider value={{ volunteer, updateVolunteer }}>
      {props.children}
    </VolunteerContext.Provider>
  );
};

export default VolunteerContextProvider;
