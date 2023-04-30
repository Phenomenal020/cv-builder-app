import { useState, useContext, useRef } from "react";
import styles from "../../static/styles/cvpages.module.css"
import { Accordion, Checkbox, FormControlLabel, AccordionDetails, AccordionSummary, Box, Button, FormControl, FormGroup, InputLabel, makeStyles, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Table } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CertificationContext } from "../../context/certificationContext";
import { formatMonth } from "../helperComponents/helpers";

const CertificationsMui = () => {
    const { certificationArr, updateCertification, deleteCertification } = useContext(CertificationContext);

    const [edit, setEdit] = useState(certificationArr)
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState(null)

    // start
    const [startMonth, setStartMonth] = useState('');
    const [startYear, setStartYear] = useState('');
    const [editStart, setEditStart] = useState('');

    const [checked, setChecked] = useState(false);
    const certificate = useRef(null);
    const link = useRef(null);
    // const year = useRef(null);
    const description = useRef(null);

    const handleCheck = () => {
        setChecked(check => !check);
    };

    const handleStartMonthChange = (event) => {
        setStartMonth(event.target.value);
    };

    const handleStartYearChange = (event) => {
        setStartYear(event.target.value);
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

    const populateFields = () => {
        const certDetails = {
            certId: Math.random() * 10000,
            certification: certificate.current.value
                ? certificate.current.value
                : null,
            // if checked, use current month
            year: checked
                ? "ongoing"
                : (startMonth && startYear) ? `${startYear}-${startMonth}` : null,
            other: description.current.value ? description.current.value : null,
            link: link.current.value ? link.current.value : null
        };
        // check required fields
        if (!certDetails.certification) {
            return null
        } else {
            // console.log("certDetails", certDetails)
            return certDetails
        }
    };

    const resetFields = () => {
        certificate.current.value = null;
        link.current.value = null;
        // year.current.value = "";
        description.current.value = null;
        // setMsg(defaultMsg);
        setChecked(false);
        setEditStart("")
        setStartMonth("")
        setStartYear("")
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let certDetails = populateFields()
        if (certDetails) {
            let newCert = updateCertification(certDetails, null);
            setEdit(prevState => [...newCert])
            resetFields()
            setEditMode(false)
        } else {
            console.log("Missing one or more required fields")
        }
    };

    const removeYear = (yearAndMonth) => {
        console.log("yearAndMonth", yearAndMonth)
        if (typeof (yearAndMonth) === "number") {
            return yearAndMonth + 1
        }
        let details = yearAndMonth.split("-")
        return details[1]
    }

    const updateHandler = (__edit, mode) => {
        if (mode === "update") {
            const d = new Date()
            let monthOnly = removeYear(__edit.year)
            certificate.current.value = __edit.certification
            link.current.value = __edit.link
            // year.current.value = `${d.getFullYear()}-${monthOnly}`;
            description.current.value = __edit.other;
            setEditMode(true)
            setEditId(__edit.certId)
        } else {
            // delete
            let newCert = deleteCertification(__edit)
            setEdit(prevState => [...newCert])
            resetFields()
            setEditMode(false)
        }
    }

    const handleEditSubmit = (evt) => {
        evt.preventDefault()
        let certDetails = populateFields()
        if (certDetails) {
            let newCert = updateCertification(certDetails, editId);
            setEdit(prevState => [...newCert])
            setEditMode(false)
            resetFields()
            setEditId(null)
        } else {
            // console.log("Missing one or more required fields")
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
                        Continuing Education, Professional development and Additional training
                    </Typography>
                    <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s,
                    </Typography>
                </div>
                <hr className={styles.hr} />

                <div className={styles.textFieldWrapper}>
                    <TextField
                        inputRef={certificate}
                        id="outlined-text-input"
                        label="Certification/Training"
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
                                value={startMonth}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateStartMonthOptions()}
                            </Select>
                        </FormControl>
                        <FormControl className={styles.startSelect}>
                            <InputLabel id="year-label">Start year</InputLabel>
                            <Select
                                labelId="year-label"
                                id="year-select"
                                onChange={handleStartYearChange}
                                value={startYear}
                                variant="outlined"
                                style={{ textAlign: "left" }}
                            >
                                {generateStartYearOptions()}
                            </Select>
                        </FormControl>
                    </div>

                    <FormGroup>
                        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "-16px", letterSpacing: "-8px" }}>
                            <FormControlLabel id="present"
                                name="present"
                                value="present"
                                checked={checked}
                                onChange={handleCheck}
                                control={<Checkbox />}
                                label="Present" />
                        </div>
                    </FormGroup>



                    <TextField
                        inputRef={link}
                        id="outlined-text-input"
                        label="Link"
                        type="text"
                        variant="outlined"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />

                    <TextField
                        inputRef={description}
                        id="outlined-text-input"
                        label="Notes/Comments"
                        type="text"
                        variant="outlined"
                        multiline
                        minRows={6}
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div className={styles.editBtnWrapper}>
                        {editMode ? (
                            <Button variant="contained" color="primary" onClick={handleEditSubmit}>
                                + <span>UPDATE CERTIFICATION/TRAINING</span>
                            </Button>
                        ) : (
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                + <span>ADD CERTIFICATION/TRAINING</span>
                            </Button>
                        )}
                    </div>


                </div>

            </Box>

            {edit.length > 0 ? <section style={{ marginBottom: "6rem" }}>
                <Typography variant="h6">Summary</Typography>
                {edit.map(_edit => {
                    return <Accordion key={_edit.certId} style={{ marginBottom: "6px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{_edit.certification}</Typography>
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
                                            <TableCell align="left">Certification:</TableCell>
                                            <TableCell align="left">{_edit.certification}</TableCell>
                                        </TableRow>
                                        {_edit.year ? <TableRow>
                                            <TableCell align="left">Start:  </TableCell>
                                            <TableCell align="left">
                                                {_edit.year === "ongoing" ? "ongoing" : formatMonth(_edit.year)}
                                            </TableCell>
                                        </TableRow> : ""}
                                        {_edit.link ? <TableRow>
                                            <TableCell align="left">Link:  </TableCell>
                                            <TableCell align="left">{_edit.link}</TableCell>
                                        </TableRow> : ""}
                                        {_edit.other ? <TableRow>
                                            <TableCell align="left">Note/Comments:  </TableCell>
                                            <TableCell align="left">{_edit.other}</TableCell>
                                        </TableRow> : ""}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>


                })}
            </section > : ""
            }
        </>
    )


}

export default CertificationsMui