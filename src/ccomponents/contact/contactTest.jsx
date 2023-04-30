import { useState, useContext, useRef } from "react";
import { Box, Button, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";

import styles from "../../static/styles/cvpages.module.css"
// import { CloudUpload, Delete } from "@material-ui/icons";

import { ContactContext } from "../../context/contactContext";

import countries from "../helperComponents/countries";
// import { useEffect } from "react";

const ContactTest = () => {

    const defaultMsg =
        "Headline & Summary Basically a short summary of related work experience and key skills";
    const [msg, setMsg] = useState(defaultMsg);
    const [selectedCountry, setSelectedCountry] = useState("Nigeria");

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

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
        console.log(event.target.value)
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
            headline: headline.current.value ? headline.current.value : null,
            linkedIn: linkedIn.current.value ? linkedIn.current.value : null,
            github: github.current.value ? github.current.value : null,
            website: website.current.value ? website.current.value : null,
        };
        // handleScroll();
        // handle required fields
        console.log(contactDetails)
        updateContact(contactDetails);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, p: 3, width: '25ch' },
            }}
            // noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className={styles.pageContainer}
        >
            {/* ----------- Intro section --------------- */}
            <div className={styles.contactHeader}>
                <Typography variant="h4" id="headerText">
                    Contact & Personal details
                </Typography>
                <Typography variant="body1">
                    Include relevant contact details. Required fields are marked with asterisks.
                </Typography>
            </div>
            <hr className={styles.hr} />


            <div className={styles.textFieldWrapper}>

                {/* file upload */}
                <div>
                    <Grid item className={styles.fileUploadWrapper}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleFileUpload}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                        <Typography variant="body1">
                            Upload your picture (Not compulsory)
                        </Typography>

                    </Grid>

                    {localStorage.getItem("fileName") ? (
                        <div style={{ textAlign: "left", width: "60%", marginTop: "4px", margin: "4px auto" }}>
                            <Typography variant="body1">
                                Uploaded: {localStorage.getItem("fileName")}
                            </Typography>
                        </div>
                    ) : null}
                </div>

                <TextField
                    inputRef={firstName}
                    id="outlined-text-input"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                // defaultValue="First Name"
                />
                <TextField
                    inputRef={lastName}
                    id="outlined-text-input"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                // defaultValue="First Name"
                />
                <TextField
                    inputRef={otherNames}
                    id="outlined-text-input"
                    label="Other Names"
                    type="text"
                    variant="outlined"
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                // defaultValue="First Name"
                />
                <TextField
                    inputRef={email}
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <TextField
                    inputRef={phoneNumber}
                    id="standard-phone-input"
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <FormControl className={styles.textFieldTest}>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                        labelId="country-label"
                        id="country-select"
                        variant="outlined"
                        onChange={handleChange}
                        required
                        value={selectedCountry}
                        style={{textAlign: "left"}}
                    >
                        {countries.map((country) => (
                            <MenuItem key={Math.random() * 1000000} value={country.country}>
                                {country.country}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    inputRef={role}
                    id="standard-role-input"
                    label="Role"
                    type="text"
                    variant="outlined"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <TextField
                    inputRef={state}
                    id="standard-role-input"
                    label="State"
                    type="text"
                    variant="standard"
                    required
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <TextField
                    inputRef={headline}
                    id="outlined-multiline-flexible"
                    label="Summary/Headline"
                    variant="outlined"
                    multiline
                    required
                    minRows={6}
                    placeholder={msg}
                />
                <TextField
                    inputRef={website}
                    id="standard-role-input"
                    label="Website"
                    type="text"
                    variant="outlined"
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <TextField
                    inputRef={linkedIn}
                    id="standard-role-input"
                    label="LinkedIn"
                    type="text"
                    variant="outlined"
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
                <TextField
                    inputRef={github}
                    id="standard-role-input"
                    label="Github"
                    type="text"
                    variant="outlined"
                    className={styles.textFieldTest}
                    InputLabelProps={{ className: styles.label }}
                />
            </div>

            <Box className={styles.editBtnWrapper}>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </Box>

    )
}

export default ContactTest;