import styles from "../../static/styles/cvpages.module.css";
import { useRef, useContext, useState } from "react";
import { VolunteerContext } from "../../context/volunteerContext";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Table, Checkbox, FormControlLabel } from "@material-ui/core";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const VolunteerMui = () => {

    const { volunteer, updateVolunteer, deleteVolunteer } = useContext(VolunteerContext);
    const [present, setPresent] = useState(false);

    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState(null)
    const [edit, setEdit] = useState(volunteer)

    const position = useRef(null);
    const project = useRef(null);
    const location = useRef(null);
    const responsibilities = useRef(null);
    const presently = useRef(null);

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

    const populateFields = () => {
        const volunteerDetails = {
            volunteerId: Math.random() * 10000,
            position: position.current.value ? position.current.value : null,
            project: project.current.value ? project.current.value : null,
            location: location.current.value ? location.current.value : null,
            start: (startMonth && startDay && startYear) ? `${startYear}-${startMonth}-${startDay}` : null,
            end: present ? null : (endMonth && endDay && endYear) ? `${endYear}-${endMonth}-${endDay}` : null,
            responsibilities: responsibilities.current.value ? responsibilities.current.value : "",
            presently: present
        };
        // check required fields
        let date = volunteerDetails.presently ? true : (volunteerDetails.start && volunteerDetails.end) ? true : false
        if (!volunteerDetails.position || !volunteerDetails.project || !date) {
            return null
        } else {
            return volunteerDetails;
        }
    };

    const handleCheck = () => {
        setPresent(presently.current.checked);
    };

    const resetFields = () => {
        position.current.value = "";
        project.current.value = "";
        location.current.value = "";
        setEditStart("")
        setEditEnd("")
        setStartDay("")
        setStartMonth("")
        setStartYear("")
        setEndDay("")
        setEndMonth("")
        setEndYear("")
        responsibilities.current.value = "";
        presently.current.checked = false;
        setPresent(false);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let volunteerDet = populateFields()
        if (volunteerDet) {
            let newVolunteer = updateVolunteer(volunteerDet, null);
            setEdit(prevState => [...newVolunteer])
            resetFields()
            setEditMode(false)
        } else {
            console.log("Missing one or more required fields")
        }
    };

    const updateHandler = (__edit, mode) => {
        if (mode === "update") {
            position.current.value = __edit.position
            project.current.value = __edit.project;
            location.current.value = __edit.location;
            // start.current.value = __edit.start;
            // end.current.value = __edit.end;
            responsibilities.current.value = __edit.responsibilities;
            setPresent(prevState => __edit.present);
            setEditMode(true)
            setEditId(__edit.volunteerId)
        } else {
            let newVolunteer = deleteVolunteer(__edit);
            setEdit(prevState => [...newVolunteer])
            resetFields()
            setEditMode(false)
        }

    }

    const handleEditSubmit = (evt) => {
        evt.preventDefault()
        let volunteerDet = populateFields()
        if (volunteerDet) {
            let newVolunteer = updateVolunteer(volunteerDet, editId);
            setEdit(prevState => [...newVolunteer])
            setEditMode(false)
            resetFields()
            setEditId(null)
        } else {
            console.log("Missing one or more required fields")
        }
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
                        Volunteer Experience
                    </Typography>
                    <Typography variant="body1">
                        Please include volunteer jobs you did in the past or are still doing</Typography>
                </div>
                <hr className={styles.hr} />

                <div className={styles.textFieldWrapper}>
                    <TextField
                        inputRef={position}
                        id="outlined-text-input"
                        label="Volunteer Position"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <TextField
                        inputRef={project}
                        id="outlined-text-input"
                        label="Project"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <TextField
                        inputRef={location}
                        id="outlined-text-input"
                        label="Location"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />

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

                    <FormGroup>
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "-16px", letterSpacing: "-8px" }}>
                            <FormControlLabel id="present"
                                name="present"
                                value="present"
                                checked={present}
                                onChange={handleCheck}
                                control={<Checkbox />}
                                inputRef={presently}
                                label="I currently volunteer here" />
                        </div>
                    </FormGroup>

                    <TextField
                        inputRef={responsibilities}
                        id="outlined-multiline-flexible"
                        label="Responsibilities"
                        multiline
                        minRows={6}
                        variant="outlined"
                        className={styles.textFieldTest}
                        placeholder="Enter a brief description of your role at this job"
                    />

                </div>

                <div className={styles.editBtnWrapper}>
                    {editMode ? (
                        <Button variant="contained" color="primary" onClick={handleEditSubmit}>
                            + <span>UPDATE VOLUNTEER</span>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            + <span>ADD VOLUNTEER</span>
                        </Button>
                    )}
                </div>
            </Box >

            {edit.length > 0 ? <section style={{ marginBottom: "6rem" }}>
                <Typography variant="h6">Summary</Typography>
                {edit.map(_edit => {
                    return <Accordion key={_edit.educationId} style={{ marginBottom: "6px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{_edit.position}, {_edit.project}</Typography>
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
                                            <TableCell align="left">Role:</TableCell>
                                            <TableCell align="left">{_edit.position}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Organisation/Project:  </TableCell>
                                            <TableCell align="left">{_edit.project}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Location:  </TableCell>
                                            <TableCell align="left">{_edit.location}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Start:  </TableCell>
                                            <TableCell align="left">{_edit.start}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">End: </TableCell>
                                            <TableCell align="left">_{edit.presently ? "I currently volunteer here" : _edit.end}  </TableCell>
                                        </TableRow>
                                        {_edit.responsibilities ? <TableRow>
                                            <TableCell align="left">Job description:  </TableCell>
                                            <TableCell align="left">{_edit.responsibilities}</TableCell>
                                        </TableRow> : ""}
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

export default VolunteerMui