import styles from "../../static/styles/cvForm.module.css";
import { useState, useContext, useRef } from "react";
import CountryList from "../helperComponents/CountryList";
import fileIconSvg from "../../static/icons/fileUploadIcon.svg";
import { ContactContext } from "../../context/contactContext";

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
  const city = useRef(null);
  const state = useRef(null);
  const zip = useRef(null);
  const headline = useRef(null);
  const dob = useRef(null);
  const nationality = useRef(null);
  const linkedIn = useRef(null);
  const github = useRef(null);
  const website = useRef(null);
  const other = useRef(null);

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

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactDetails = {
      firstName: firstName.current.value ? firstName.current.value : null,
      lastName: lastName.current.value ? lastName.current.value : null,
      otherNames: otherNames.current.value ? otherNames.current.value : null,
      email: email.current.value ? email.current.value : null,
      phoneNumber: phoneNumber.current.value ? phoneNumber.current.value : null,
      city: city.current.value ? city.current.value : null,
      country: !selectedCountry ? null : selectedCountry,
      state: state.current.value ? state.current.value : null,
      zip: zip.current.value ? zip.current.value : null,
      headline:
        headline.current.value !== defaultMsg && headline.current.value
          ? headline.current.value
          : null,
      dob: dob.current.value ? dob.current.value : null,
      nationality: nationality.current.value ? nationality.current.value : null,
      linkedIn: linkedIn.current.value ? linkedIn.current.value : null,
      github: github.current.value ? github.current.value : null,
      website: website.current.value ? website.current.value : null,
      other: other.current.value ? other.current.value : null
    };
    updateContact(contactDetails);
  };

  return (
    <form className={styles.itemContainer} onSubmit={handleSubmit}>
      {/* Page header */}
      <h2 className={styles.formHeader}>Contact & Personal details</h2>
      <p className={styles.formSummary}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <hr className={styles.hr} />

      {/* upload photo */}
      <div className={styles.fileUploadWrapper}>
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
            <input type="file" />
            Upload your picture
          </div>
        </label>
      </div>

      {/* names */}
      <div className={styles.namesWrapper}>
        <input
          ref={firstName}
          type="text"
          placeholder="First name"
          name="firstName"
          id="firstName"
          required
        ></input>
        <input
          ref={lastName}
          type="text"
          placeholder="Last name"
          name="lastName"
          id="lastName"
          required
        ></input>
        <input
          ref={otherNames}
          type="text"
          placeholder="Other names"
          name="otherNames"
          id="otherNames"
        ></input>
      </div>

      {/* phone number  & email */}
      <div className={styles.emailWrapper}>
        <input
          ref={email}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        ></input>
        <input
          ref={phoneNumber}
          type="text"
          placeholder="Phone no"
          name="phoneNumber"
          id="phoneNumber"
          required
        ></input>
      </div>

      {/* country-city */}
      <div className={styles.countryCityWrapper}>
        <div className={styles.countryListWrapper} onClick={toggleDropdown}>
          {selectedCountry || "---select country---"}
          {/* {!selectedCountry && "---select country---"} */}
          {countryList && (
            <CountryList setSelectedCountry={setSelectedCountry} />
          )}
        </div>
        <input
          ref={city}
          type="text"
          placeholder="city"
          name="city"
          id="city"
        ></input>
      </div>

      {/* state-zip */}
      <div className={styles.stateZipWrapper}>
        <input
          ref={state}
          type="text"
          placeholder="state"
          name="state"
          id="state"
        ></input>
        <input
          ref={zip}
          type="text"
          placeholder="zip"
          name="zip"
          id="zip"
        ></input>
      </div>

      <div className={styles.headlineWrapper}>
        <textarea
          ref={headline}
          id="headline"
          name="headline"
          rows="10"
          cols="50"
          onFocus={handleFocus}
          value={msg}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* DOB & Nationality */}
      <div className={styles.dobAndNationalityWrapper}>
        <input
          ref={dob}
          type="date"
          placeholder="Date of birth"
          name="dob"
          id="dob"
        ></input>
        <input
          ref={nationality}
          type="text"
          placeholder="Nationality"
          name="nationality"
          id="nationality"
        ></input>
      </div>

      {/* LinkedIn and Github */}
      <div className={styles.linkedInGithubWrapper}>
        <input
          ref={linkedIn}
          type="text"
          placeholder="LinkedIn"
          name="linkedIn"
          id="linkedIn"
        ></input>
        <input
          ref={github}
          type="text"
          placeholder="Github"
          name="github"
          id="github"
        ></input>
      </div>

      {/* website */}
      <div className={styles.websiteWrapper}>
        <input
          ref={website}
          type="text"
          placeholder="Your website"
          name="website"
          id="website"
        ></input>
        {/* Other */}
        <input
          ref={other}
          type="text"
          placeholder="Other"
          name="other"
          id="other"
        ></input>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default Contact;
