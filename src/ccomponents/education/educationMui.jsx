import { useState, useContext, useRef } from "react";
import styles from "../../static/styles/cvpages.module.css"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Table } from "@material-ui/core";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import countries from "../helperComponents/countries";
import degrees from "../helperComponents/degrees";

// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

import { EducationContext } from "../../context/educationContext";


const EducationMui = () => {
    const { education, updateEducation, deleteEducation } = useContext(EducationContext);

    const [selectedCountry, setSelectedCountry] = useState("Nigeria");
    const [selectedDegree, setSelectedDegree] = useState("B.Eng");
    const program = useRef(null);
    const school = useRef(null);
    const state = useRef(null);
    const gpa = useRef(null);
    const relevantCourses = useRef(null)
    const project = useRef(null)

    // start
    const [startDay, setStartDay] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [editStart, setEditStart] = useState('');

    // end
    const [endDay, setEndDay] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [editEnd, setEditEnd] = useState('');

    const [edit, setEdit] = useState(education)
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState(null)

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const handleStartDayChange = (event) => {
        setStartDay(event.target.value);
    };

    const handleStartMonthChange = (event) => {
        setStartMonth(event.target.value);
        setStartDay('');
    };

    const handleStartYearChange = (event) => {
        setStartYear(event.target.value);
    };

    const handleEndDayChange = (event) => {
        setEndDay(event.target.value);
    };

    const handleEndMonthChange = (event) => {
        setEndMonth(event.target.value);
        setEndDay('');
    };

    const handleEndYearChange = (event) => {
        setEndYear(event.target.value);
    };

    const generateStartDayOptions = () => {
        const numDays = getDaysInMonth(startMonth, startYear);
        const options = [];
        for (let i = 1; i <= numDays; i++) {
            options.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }
        return options;
    };

    const generateEndDayOptions = () => {
        const numDays = getDaysInMonth(endMonth, endYear);
        const options = [];
        for (let i = 1; i <= numDays; i++) {
            options.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }
        return options;
    };

    const generateEndMonthOptions = () => {
        const months = [
            { value: '01', label: 'January' },
            { value: '02', label: 'February' },
            { value: '03', label: 'March' },
            { value: '04', label: 'April' },
            { value: '05', label: 'May' },
            { value: '06', label: 'June' },
            { value: '07', label: 'July' },
            { value: '08', label: 'August' },
            { value: '09', label: 'September' },
            { value: '10', label: 'October' },
            { value: '11', label: 'November' },
            { value: '12', label: 'December' },
        ];
        return months.map((endMonth) => (
            <MenuItem key={endMonth.value} value={endMonth.value}>
                {endMonth.label}
            </MenuItem>
        ));
    };

    const generateStartMonthOptions = () => {
        const months = [
            { value: '01', label: 'January' },
            { value: '02', label: 'February' },
            { value: '03', label: 'March' },
            { value: '04', label: 'April' },
            { value: '05', label: 'May' },
            { value: '06', label: 'June' },
            { value: '07', label: 'July' },
            { value: '08', label: 'August' },
            { value: '09', label: 'September' },
            { value: '10', label: 'October' },
            { value: '11', label: 'November' },
            { value: '12', label: 'December' },
        ];
        return months.map((startMonth) => (
            <MenuItem key={startMonth.value} value={startMonth.value}>
                {startMonth.label}
            </MenuItem>
        ));
    };

    const generateStartYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 100; i--) {
            years.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }
        return years;
    };

    const generateEndYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= currentYear - 100; i--) {
            years.push(
                <MenuItem key={i} value={i}>
                    {i}
                </MenuItem>
            );
        }
        return years;
    };

    const [relevantMsg, setRelevantMg] = useState("Example: Physical Chemistry, Optics, Linear Algebra, Calculus")

    const [projectMsg, setProjectMsg] = useState("Example: My Project was on the stabilization of Black cotton soil, a problematic soil in Northeast Nigeria bla bla bla ...")

    // populate relevant fields
    const populateFields = () => {
        const educationDetails = {
            educationId: Math.random() * 1000,
            program: program.current.value ? program.current.value : null,
            school: school.current.value ? school.current.value : null,
            degree: selectedDegree ? selectedDegree : null,
            end: (endMonth && endDay && endYear) ? `${endYear}-${endMonth}-${endDay}` : null,
            start: (startMonth && startDay && startYear) ? `${startYear}-${startMonth}-${startDay}` : null,
            state: state.current.value ? state.current.value : null,
            country: selectedCountry ? selectedCountry : null,
            gpa: gpa.current.value ? gpa.current.value : null,
            relevantCourses: relevantCourses.current.value ? relevantCourses.current.value : null,
            project: project.current.value ? project.current.value : null
        };
        // check required fields
        if (!educationDetails.program || !educationDetails.degree || !educationDetails.school || !educationDetails.state || !educationDetails.country || !educationDetails.start || !educationDetails.end) {
            return null
        } else {
            return educationDetails;
        }
    };

    // reset fields
    const resetFields = () => {
        program.current.value = "";
        state.current.value = "";
        gpa.current.value = "";
        school.current.value = "";
        relevantCourses.current.value = "";
        project.current.value = "";
        setSelectedCountry("Nigeria");
        setSelectedDegree("B.Eng");
        setEditStart("")
        setEditEnd("")
        setStartDay("")
        setStartMonth("")
        setStartYear("")
        setEndDay("")
        setEndMonth("")
        setEndYear("")
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let educationDet = populateFields()
        if (educationDet) {
            let newEducation = updateEducation(educationDet, null);
            setEdit(prevState => [...newEducation])
            resetFields()
            setEditMode(false)
        } else {
            console.log("Missing one or more required fields")
        }
    };

    const updateHandler = (__edit, mode) => {
        if (mode === "update") {
            state.current.value = __edit.state;
            program.current.value = __edit.program;
            let editStartSplit = __edit.start.split("-");
            setStartDay(editStartSplit[2])
            setStartMonth(editStartSplit[1])
            setStartYear(editStartSplit[0])
            setEditStart(__edit.start)
            let editEndSplit = __edit.end.split("-");
            setEndDay(editEndSplit[2])
            setEndMonth(editEndSplit[1])
            setEndYear(editEndSplit[0])
            setEditEnd(__edit.end)
            gpa.current.value = __edit.gpa;
            school.current.value = __edit.school;
            relevantCourses.current.value = __edit.relevantCourses;
            project.current.value = __edit.project;
            setSelectedCountry(__edit.country);
            setSelectedDegree(__edit.degree);
            setEditMode(true)
            setEditId(__edit.educationId)
        } else {
            // delete
            let newEducation = deleteEducation(__edit);
            setEdit(prevState => [...newEducation])
            resetFields()
            setEditMode(false)
        }

    }

    const handleEditSubmit = (evt) => {
        evt.preventDefault()
        let educationDet = populateFields()
        if (educationDet) {
            let newEducation = updateEducation(educationDet, editId);
            setEdit(prevState => [...newEducation])
            setEditMode(false)
            resetFields()
            setEditId(null)
        } else {
            console.log("Missing one or more required fields")
        }
    }

    const handleDegreeChange = (evt) => {
        setSelectedDegree(evt.target.value)
    }

    const handleCountryChange = (evt) => {
        setSelectedCountry(evt.target.value)
    }

    return (
        <>
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
                        Education
                    </Typography>
                    <Typography variant="body1">
                        Please enter degrees received, from highest to lowest
                    </Typography>
                </div>
                <hr className={styles.hr} />

                <div className={styles.textFieldWrapper}>
                    <FormControl className={styles.textFieldTest}>
                        <InputLabel id="country-label">Degree/Diploma</InputLabel>
                        <Select
                            variant="outlined"
                            labelId="degree-label"
                            id="degree-select"
                            onChange={handleDegreeChange}
                            required
                            value={selectedDegree}
                            style={{ textAlign: "left" }}
                        >
                            {degrees.map((degree) => (
                                <MenuItem key={Math.random() * 1000000} value={degree.degree}>
                                    {degree.degree}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        inputRef={program}
                        id="outlined-text-input"
                        label="Program"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />

                    <TextField
                        inputRef={school}
                        id="outlined-text-input"
                        label="School"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />

                    <TextField
                        inputRef={state}
                        id="outlined-text-input"
                        label="State"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />

                    {/* country select */}
                    <FormControl className={styles.textFieldTest}>
                        <InputLabel id="country-label">Country</InputLabel>
                        <Select
                            labelId="country-label"
                            id="country-select"
                            onChange={handleCountryChange}
                            required
                            value={selectedCountry}
                            style={{ textAlign: "left" }}
                            variant="outlined"
                        >
                            {countries.map((country) => (
                                <MenuItem key={Math.random() * 1000000} value={country.country}>
                                    {country.country}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div style={{ display: "flex", margin: "12px 0px" }}>
                        <FormControl className={styles.startSelect}>
                            <InputLabel id="country-label">Start month</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                onChange={handleStartMonthChange}
                                required
                                value={startMonth}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateStartMonthOptions()}
                            </Select>
                        </FormControl>
                        <FormControl className={styles.startSelect}>
                            <InputLabel id="day-label">Start day</InputLabel>
                            <Select
                                labelId="day-label"
                                id="day-select"
                                onChange={handleStartDayChange}
                                required
                                value={startDay}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateStartDayOptions()}
                            </Select>
                        </FormControl>
                        <FormControl className={styles.startSelect}>
                            <InputLabel id="year-label">Start year</InputLabel>
                            <Select
                                labelId="year-label"
                                id="year-select"
                                onChange={handleStartYearChange}
                                required
                                value={startYear}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateStartYearOptions()}
                            </Select>
                        </FormControl>
                    </div>

                    <div style={{ display: "flex", margin: "12px 0px" }}>
                        <FormControl className={styles.endSelect}>
                            <InputLabel id="country-label">End month</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                onChange={handleEndMonthChange}
                                required
                                value={endMonth}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateEndMonthOptions()}
                            </Select>
                        </FormControl>
                        <FormControl className={styles.endSelect}>
                            <InputLabel id="day-label">End day</InputLabel>
                            <Select
                                labelId="day-label"
                                id="day-select"
                                onChange={handleEndDayChange}
                                required
                                value={endDay}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateEndDayOptions()}
                            </Select>
                        </FormControl>
                        <FormControl className={styles.endSelect}>
                            <InputLabel id="year-label">End year</InputLabel>
                            <Select
                                labelId="year-label"
                                id="year-select"
                                onChange={handleEndYearChange}
                                required
                                value={endYear}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateEndYearOptions()}
                            </Select>
                        </FormControl>
                    </div>

                    <TextField
                        inputRef={relevantCourses}
                        id="outlined-multiline-flexible"
                        label="relevant Courses taken"
                        multiline
                        minRows={6}
                        variant="outlined"
                        className={styles.textFieldTest}
                        placeholder={relevantMsg}
                    />

                    <TextField
                        inputRef={project}
                        id="outlined-multiline-flexible"
                        label="Project"
                        multiline
                        minRows={6}
                        variant="outlined"
                        className={styles.textFieldTest}
                        placeholder={projectMsg}
                    />

                    <TextField
                        inputRef={gpa}
                        id="outlined-text-input"
                        label="CGPA"
                        type="text"
                        variant="outlined"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <Typography variant="body1" style={{ textAlign: "right", marginTop: "4px", color: "blue" }}>
                        * Only add your CGPA if it's above 3.5/5.0 or equivalent
                    </Typography>
                </div>

                <div className={styles.editBtnWrapper}>
                    {editMode ? (
                        <Button variant="contained" color="primary" onClick={handleEditSubmit}>
                            + <span>UPDATE EDUCATION</span>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            + <span>ADD EDUCATION</span>
                        </Button>
                    )}
                </div>

            </Box>
            {edit.length > 0 ? <section style={{ marginBottom: "6rem" }}>
                <Typography variant="h6">Summary</Typography>
                {edit.map(_edit => {
                    return <Accordion key={_edit.educationId} styles={{ marginBottom: "6px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{_edit.degree}, {_edit.program}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "flex", flexDirection: "column", position: "relative", alignItems: "flex-start" }}>
                            <div className={styles.editDiv}>

                                <button type="submit" onClick={() => updateHandler(_edit, "update")} className={styles.editBtn}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>

                                <button type="submit" onClick={() => updateHandler(_edit, "delete")} className={styles.editBtn}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>

                            </div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="asummary table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left">Degree obtained</TableCell>
                                            <TableCell align="left">{_edit.degree}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Programme:  </TableCell>
                                            <TableCell align="left">{_edit.program}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">School:  </TableCell>
                                            <TableCell align="left">{_edit.school}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Country:  </TableCell>
                                            <TableCell align="left">{_edit.country}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">State:  </TableCell>
                                            <TableCell align="left">{_edit.state}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Start:  </TableCell>
                                            <TableCell align="left">{_edit.start}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">End:  </TableCell>
                                            <TableCell align="left">{_edit.end}</TableCell>
                                        </TableRow>
                                        {_edit.gpa && <TableRow>
                                            <TableCell align="left">Final Score:  </TableCell>
                                            <TableCell align="left">{_edit.gpa}</TableCell>
                                        </TableRow>}
                                        {_edit.relevantCourses && <TableRow>
                                            <TableCell align="left">Relevant courses:  </TableCell>
                                            <TableCell align="left">{_edit.relevantCourses}</TableCell>
                                        </TableRow>}
                                        {_edit.project && <TableRow>
                                            <TableCell align="left">Project:  </TableCell>
                                            <TableCell align="left">{_edit.project}</TableCell>
                                        </TableRow>}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>


                })}
            </section > : ""
            }
            <hr />
        </>
    )
}

export default EducationMui;