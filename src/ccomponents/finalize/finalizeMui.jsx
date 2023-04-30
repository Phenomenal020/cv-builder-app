import styles from "../../static/styles/cvpages.module.css";
import { useRef, useContext, useState } from "react"
import { FinalizeContext } from "../../context/finalizeContext";
import { Accordion, AccordionSummary, Box, Button, TextField, Typography, AccordionDetails, TableContainer, Table, TableRow, TableCell, Paper } from "@material-ui/core";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FinalizeMui = () => {
    const { updateFinalize, finalize, deleteFinalize } = useContext(FinalizeContext);

    const [edit, setEdit] = useState(finalize)
    const [editAward, setEditAward] = useState(false)
    const [editExtracurr, setEditExtracurr] = useState(false)
    const [editAcademicWork, setEditAcademicWork] = useState(false)
    const [editMembership, setEditMembership] = useState(false)
    const [editLanguage, setEditLanguage] = useState(false)
    const [editCustom, setEditCustom] = useState(false)

    const [oldEdit, setOldEdit] = useState("")

    let awardRef = useRef(null);
    let extraCurricularRef = useRef(null);
    let academicRef = useRef(null);
    let membershipRef = useRef(null);
    let languageRef = useRef(null);
    let customRef = useRef(null);

    const populateFields = () => {
        let award = awardRef.current.value ? awardRef.current.value : null;
        let extraCurricular = extraCurricularRef.current.value
            ? extraCurricularRef.current.value
            : null;
        let academicWork = academicRef.current.value
            ? academicRef.current.value
            : null;
        let membership = membershipRef.current.value
            ? membershipRef.current.value
            : null;
        let language = languageRef.current.value ? languageRef.current.value : null;
        let custom = customRef.current.value ? customRef.current.value : null;

        if (membership || custom || language || award || academicWork || extraCurricular) {
            let newFields = updateFinalize(
                award,
                extraCurricular,
                academicWork,
                membership,
                language,
                custom,
                oldEdit
            )
            // if (newFields) {
            return newFields
        } else {
            return null
        }
    }

    const handleAdd = ref => {
        setOldEdit("")
        let newFields = populateFields();
        if (newFields) {
            setEdit(newFields)
        } else {
            console.log("Invalid/empty fields")
        }
        ref.current.value = "";
        ref.current.focus();
    };

    const handleEdit = (ref) => {
        let newFields = populateFields();
        if (newFields) {
            setEdit(newFields)
            ref.current.value = "";
            ref.current.focus();
        } else {
            console.log("exists")
        }
        // console.log("setEditFunc", setEditFunc)
        // setEditFunc(false)
    }

    const updateHandler = (key, value) => {
        if (key === "award") {
            awardRef.current.value = value
            setEditAward(true)
            // setOldEdit(value)
        }
        if (key === "extraCurricular") {
            extraCurricularRef.current.value = value
            setEditExtracurr(true)
            // setOldEdit(value)
        }
        if (key === "academicWork") {
            academicRef.current.value = value
            setEditAcademicWork(true)
            // setOldEdit(value)
        }
        if (key === "membership") {
            membershipRef.current.value = value
            setEditMembership(true)
        }
        if (key === "language") {
            languageRef.current.value = value
            setEditLanguage(true)
            // setOldEdit(value)
        }
        if (key === "custom") {
            customRef.current.value = value
            setEditCustom(true)
            // setOldEdit(value)
        }
    }

    const deleteHandler = (key, value) => {
        // console.log("calling deleteFinalize", key, value)
        let newFields = deleteFinalize(key, value)
        setEdit(newFields)
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
                // onSubmit={handleSubmit}
                className={styles.pageContainer}
            >
                {/* ----------- Intro section --------------- */}
                <div className={styles.contactHeader}>
                    <Typography variant="h4" id="headerText">
                        Additional Activities
                    </Typography>
                    <Typography variant="body1">
                        (This section is optional)
                    </Typography>
                </div>
                <hr className={styles.hr} />


                <div className={styles.textFieldWrapper}>
                    <TextField
                        inputRef={awardRef}
                        id="outlined-text-input"
                        label="Award/Honours"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any award you have won in the past yhat you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editAward ? <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleEdit(awardRef); setEditAward(false) }}>
                            <span>Update award/honour</span>
                        </Button> : <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleAdd(awardRef) }}>
                            + <span>Add award/honour</span>
                        </Button>}
                    </div>

                    <TextField
                        inputRef={extraCurricularRef}
                        id="outlined-text-input"
                        label="Extra-curricular Activities"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any relevant extra curricular activity you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editExtracurr ? <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleEdit(extraCurricularRef); setEditExtracurr(false) }}>
                            <span>Update extracurricular activity</span>
                        </Button> : <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleAdd(extraCurricularRef) }}>
                            + <span>Add extracurricular activity</span>
                        </Button>}
                    </div>

                    <TextField
                        inputRef={academicRef}
                        id="outlined-text-input"
                        label="Academic Works"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any academic work you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editAcademicWork ? <Button variant="outlined" color="primary"
                            onClick={(evt) => { evt.preventDefault(); handleEdit(academicRef); setEditAcademicWork(false) }}
                        ><span>Update Academic Work</span>
                        </Button> : <Button variant="contained" color="primary"
                            onClick={(evt) => { evt.preventDefault(); handleAdd(academicRef) }}
                        >+ <span>Add Academic Work</span>
                        </Button>}
                    </div>

                    <TextField
                        inputRef={membershipRef}
                        id="outlined-text-input"
                        label="Memberships"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any professional membership you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editMembership ? <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleEdit(membershipRef); setEditMembership(false) }}
                        ><span>Update membership</span>
                        </Button> : <Button variant="contained" color="primary"
                            onClick={(evt) => { evt.preventDefault(); handleAdd(membershipRef) }}
                        >+ <span>Add membership</span>
                        </Button>}
                    </div>

                    <TextField
                        inputRef={languageRef}
                        id="outlined-text-input"
                        label="Languages"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any language you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editLanguage ? <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleEdit(languageRef); setEditLanguage(false) }}
                        ><span>Update language</span>
                        </Button> : <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleAdd(languageRef) }}
                        >+ <span>Add language</span>
                        </Button>}
                    </div>


                    <TextField
                        inputRef={customRef}
                        id="outlined-text-input"
                        label="Custom"
                        type="text"
                        variant="outlined"
                        placeholder="Enter any custom information you would like to show on your cv"
                        className={styles.textFieldTest}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ margin: "6px 0px", display: "flex", justifyContent: "flex-start" }}>
                        {editCustom ? <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleEdit(customRef); setEditCustom(false) }}
                        ><span>Update custom</span>
                        </Button> : <Button variant="contained" color="primary" onClick={(evt) => { evt.preventDefault(); handleAdd(customRef) }}
                        >+ <span>Add custom</span>
                        </Button>}
                    </div>
                </div>

                <div className={styles.editBtnWrapper}>

                </div>

            </Box>
            {
                (edit.membership.length > 0 || edit.custom.length > 0 || edit.academicWork.length > 0 || edit.language.length > 0 || edit.award.length > 0 || edit.extraCurricular.length > 0) && <section className={styles.editFinalizeContainer}>
                    {/* render membership */}
                    {edit.membership.length > 0 && <Accordion className={styles.summaryWrapper}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Memberships and Professional bodies</Typography>
                        </AccordionSummary>
                        {edit.membership.map(_membership => (
                            <AccordionDetails key={Math.random() * 10000}  >
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="Membership summary table">
                                        <TableRow>
                                            <TableCell align="left">{_membership}</TableCell>
                                            <TableCell align="right"> <div>
                                                <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_membership); updateHandler("membership", _membership) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("membership", _membership) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                            </div></TableCell>
                                        </TableRow>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        ))}
                    </Accordion>}
                    {/* render custom */}
                    {edit.custom.length > 0 && <Accordion className={styles.summaryWrapper}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Custom</Typography>
                        </AccordionSummary>
                        {edit.custom.map(_custom => (
                            <AccordionDetails key={Math.random() * 10000} className={styles.editField}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="Custom summary table">
                                        <TableRow>
                                            <TableCell align="left">
                                                {_custom}
                                            </TableCell>
                                            <TableCell align="right">
                                                <div>
                                                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_custom); updateHandler("custom", _custom) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("custom", _custom) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        ))}
                    </Accordion>}
                    {/* render academic work */}
                    {edit.academicWork.length > 0 && <Accordion className={styles.summaryWrapper}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography variant="h6">Academic works and Seminars</Typography>
                        </AccordionSummary>

                        {edit.academicWork.map(_academicWork => (
                            <AccordionDetails key={Math.random() * 10000} className={styles.editField}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} size="small" aria-label="Membership summary table">
                                        <TableRow>
                                            <TableCell align="left">{_academicWork}</TableCell>
                                            <TableCell align="right">
                                                <div>
                                                    <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_academicWork); updateHandler("academicWork", _academicWork) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                    <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("academicWork", _academicWork) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </Table>
                                </TableContainer>


                            </AccordionDetails>
                        ))}
                    </Accordion>}
                    {/* render language */}
                    {edit.language.length > 0 && <Accordion className={styles.summaryWrapper}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Languages</Typography>
                        </AccordionSummary>
                        <div>
                            {edit.language.map(_language => (
                                <AccordionDetails key={Math.random() * 10000}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="Membership summary table">
                                            <TableRow>
                                                <TableCell align="left">{_language}</TableCell>
                                                <TableCell align="right">
                                                    <div>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_language); updateHandler("language", _language) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("language", _language) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            ))}
                        </div>
                    </Accordion>}
                    {/* render award */}
                    {edit.award.length > 0 && <Accordion className={styles.summaryWrapper}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Award</Typography>
                        </AccordionSummary>
                        <div>
                            {edit.award.map(_award => (
                                <AccordionDetails key={Math.random() * 10000}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="Award summary table">
                                            <TableRow>
                                                <TableCell align="left">{_award}</TableCell>
                                                <TableCell align="right">
                                                    <div>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_award); updateHandler("award", _award) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("award", _award) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            ))}
                        </div>
                    </Accordion>}
                    {/* render extra Curricular activities */}
                    {edit.extraCurricular.length > 0 && <Accordion className={styles.editFinalizeWrapper}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h6">Extracurricular</Typography>
                        </AccordionSummary>
                        <div>
                            {edit.extraCurricular.map(_extraCurricular => (
                                <AccordionDetails key={Math.random() * 10000}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="Award summary table">
                                            <TableRow>
                                                <TableCell align="left">{_extraCurricular}</TableCell>
                                                <TableCell align="right">
                                                    <div className={styles.updateFinalizeWrapper}>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); setOldEdit(_extraCurricular); updateHandler("extraCurricular", _extraCurricular) }}><i className={`fa fa-pencil ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                        <button type="submit" onClick={(evt) => { evt.preventDefault(); deleteHandler("extraCurricular", _extraCurricular) }}><i className={`fa fa-trash ${styles.editIcons}`} aria-hidden="true"></i></button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            ))}
                        </div>
                    </Accordion>}
                </section >
            }
        </>

    );
};

export default FinalizeMui;