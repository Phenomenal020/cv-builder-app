import styles from "../../static/styles/cvForm.module.css";
import { useState, useContext, useRef } from "react";
import CountryList from "../helperComponents/CountryList";
import fileIconSvg from "../../static/icons/fileUploadIcon.svg";
import { ContactContext } from "../../context/contactContext";

import { animateScroll as scroll, scroller } from "react-scroll";

const Contact = () => {
  const defaultMsg =
    "Headline & Summary Basically a short summary of related work experience and key skills";
  const [countryList, toggleCountryList] = useState(false);
  const [msg, setMsg] = useState(defaultMsg);
  const [selectedCountry, setSelectedCountry] = useState("");

  const firstName = useRef(null);
  const lastName = useRef(null);
  const otherNames = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const state = useRef(null);
  const role = useRef(null);
  const headline = useRef(null);
  const linkedIn = useRef(null);
  const github = useRef(null);
  const website = useRef(null);

  const { updateContact } = useContext(ContactContext);

  const toggleDropdown = () => {
    toggleCountryList(prevState => !prevState);
  };

  const handleFocus = () => {
    headline.current.value = "";
  };

  const handleChange = evt => {
    setMsg(evt.target.value);
  };

  const handleFileUpload = evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      localStorage.setItem('profileImage', reader.result);
      localStorage.setItem('fileName', file.name);
    };
  }

  // const handleScroll = () => {
  //   scroller.scrollTo("headerText", {
  //     duration: 500,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //     offset: -50, // Adjust scrolling offset if needed
  //   });
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactDetails = {
      firstName: firstName.current.value ? firstName.current.value : null,
      lastName: lastName.current.value ? lastName.current.value : null,
      otherNames: otherNames.current.value ? otherNames.current.value : null,
      email: email.current.value ? email.current.value : null,
      phoneNumber: phoneNumber.current.value ? phoneNumber.current.value : null,
      country: !selectedCountry ? null : selectedCountry,
      state: state.current.value ? state.current.value : null,
      role: role.current.value ? role.current.value : null,
      headline:
        headline.current.value !== defaultMsg && headline.current.value
          ? headline.current.value
          : null,
      linkedIn: linkedIn.current.value ? linkedIn.current.value : null,
      github: github.current.value ? github.current.value : null,
      website: website.current.value ? website.current.value : null,
    };
    // handleScroll();
    updateContact(contactDetails);
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      {/* Page header */}
      <h2 className={styles.formHeader} id="headerText">Contact & Personal details</h2>
      <p className={styles.formSummary}>
        Include relevant contact details. Required fields are marked with red asterisks.
      </p>
      <hr className={styles.hr} />

      {/* upload photo */}
      <div className={styles.fieldWrapper}>
        <label className={styles.fileUploadLabel}>
          <div className={styles.fileUploadIconWrapper}>
            <img
              src={fileIconSvg}
              width={40}
              height={40}
              alt="File icon svg"
              className={styles.fileUploadIcon}
            ></img>
          </div>
          <div className={styles.fileInputWrapper}>
            <input type="file" onChange={handleFileUpload} />
            Upload your picture (Not compulsory)
          </div>
        </label>
      </div>

      {localStorage.getItem("fileName") ? <div className={styles.fileNameWrapper}>
        <p>Uploaded: {localStorage.getItem("fileName")}</p>
      </div> : ""}

      {/* names */}
      <div className={styles.fieldWrapper}>
        <label htmlFor="firstName" className={styles.labelText}>First name: <span className={styles.requiredField}>*</span></label>
        <input
          ref={firstName}
          type="text"
          placeholder="First name"
          name="firstName"
          id="firstName"
          required
        ></input>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="lastName" className={styles.labelText}>Last name:  <span className={styles.requiredField}>*</span></label>
        <input
          ref={lastName}
          type="text"
          placeholder="Last name"
          name="lastName"
          id="lastName"
          required
        ></input>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="otherNames" className={styles.labelText}>Other names: </label>
        <input
          ref={otherNames}
          type="text"
          placeholder="Other names"
          name="otherNames"
          id="otherNames"
        ></input>
      </div>

      {/* phone number  & email */}
      <div className={styles.fieldWrapper}>
        <label htmlFor="email" className={styles.labelText}>Email:  <span className={styles.requiredField}>*</span></label>
        <input
          ref={email}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        ></input>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="phoneNumber" className={styles.labelText}>Phone number:  <span className={styles.requiredField}>*</span></label>
        <input
          ref={phoneNumber}
          type="text"
          placeholder="Phone no"
          name="phoneNumber"
          id="phoneNumber"
          required
        ></input>
      </div>

      {/* role*/}
      <div className={styles.fieldWrapper}>
        <label htmlFor="role" className={styles.labelText}>Role: <span className={styles.requiredField}>*</span></label>
        <input
          ref={role}
          type="text"
          placeholder="role you're applying to"
          name="role"
          id="role"
        ></input>
      </div>

      {/* country-city */}
      <div className={styles.fieldWrapper}>
        <label htmlFor="country" className={styles.labelText}>Country: <span className={styles.requiredField}>*</span></label>
        <div className={styles.countryListWrapper} onClick={toggleDropdown}>
          {selectedCountry || "---select country---"}
          {/* {!selectedCountry && "---select country---"} */}
          {countryList && (
            <CountryList setSelectedCountry={setSelectedCountry} />
          )}
        </div>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="state" className={styles.labelText}>State: </label>
        <input
          ref={state}
          type="text"
          placeholder="city or state"
          name="state"
          id="state"
        ></input>
      </div>

      <div className={styles.textFieldWrapper}>
        <label htmlFor="headline" className={styles.labelText}>Headline: <span className={styles.requiredField}>*</span></label>
        <textarea
          ref={headline}
          id="headline"
          name="headline"
          rows="10"
          cols="50"
          onFocus={handleFocus}
          value={msg}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* LinkedIn and Github */}
      <div className={styles.fieldWrapper}>
        <label htmlFor="linkedIn" className={styles.labelText}>LinkedIn: </label>
        <input
          ref={linkedIn}
          type="text"
          placeholder="LinkedIn, if you have any"
          name="linkedIn"
          id="linkedIn"
        ></input>
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="github" className={styles.labelText}>Github: </label>
        <input
          ref={github}
          type="text"
          placeholder="Github, if you have any"
          name="github"
          id="github"
        ></input>
      </div>

      {/* website */}
      <div className={styles.fieldWrapper}>
        <label htmlFor="website" className={styles.labelText}>Website: </label>
        <input
          ref={website}
          type="text"
          placeholder="Your website, if you have any"
          name="website"
          id="website"
        ></input>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Contact;