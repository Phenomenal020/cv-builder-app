import { createContext, useState } from "react";

export const VolunteerContext = createContext();

const VolunteerContextProvider = (props) => {
  const data = JSON.parse(localStorage.getItem("volunteerArr"));
  let initialData = data ? data : [];

  const [volunteer, setVolunteer] = useState(initialData);

  const updateVolunteer = (volunteerDetails, id) => {
    // submit first volunteer
    if (id === null && volunteer.length === 0) {
      setVolunteer((prevState) => [volunteerDetails, ...prevState]);
      return [volunteerDetails, ...volunteer];
    }
    // submit subsequent volunteer
    if (id === null && volunteer.length > 0) {
      setVolunteer((prevState) => [volunteerDetails, ...prevState]);
      return [volunteerDetails, ...volunteer];
    }
    // update volunteer
    if (id) {
      let newVolunteerArr = [...volunteer];
      let foundIndex = newVolunteerArr.findIndex(
        (volunteer) => volunteer.volunteerId === id
      );
      if (foundIndex > -1) {
        newVolunteerArr[foundIndex] = volunteerDetails;
        setVolunteer(newVolunteerArr);
      } else {
        console.log("not found");
      }
      return newVolunteerArr;
    }
  };

  const deleteVolunteer = (volunteerDetails) => {
    let newVolunteerArray = [...volunteer];
    const filteredArray = newVolunteerArray.filter(
      (_volunteer) => _volunteer.volunteerId !== volunteerDetails.volunteerId
    );
    setVolunteer(filteredArray);
    return filteredArray;
  };

  return (
    <VolunteerContext.Provider
      value={{ volunteer, updateVolunteer, deleteVolunteer }}
    >
      {props.children}
    </VolunteerContext.Provider>
  );
};

export default VolunteerContextProvider;
