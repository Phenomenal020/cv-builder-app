import { useRef, useContext, useState } from "react";
import { SkillsContext } from "../../context/skillsContext";

import styles from "../../static/styles/cvpages.module.css";

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
import { TextField, Typography, Slider, Box, Button } from "@material-ui/core";

const SkillsMui = () => {

    const { skills, updateSkills, deleteSkills } = useContext(SkillsContext);

    // edits
    const [edit, setEdit] = useState(skills)
    const [editMode, setEditMode] = useState(false)
    const [editId, setEditId] = useState(null)

    // references
    const skill = useRef(null);
    // const progress = useRef(null);
    const [progress, setProgress] = useState(0)

    // populate relevant fields
    const populateFields = () => {
        // console.log(progress.current.value > 0)
        const skillDetails = {
            skillId: Math.random() * 10000,
            skill: skill.current.value ? skill.current.value : null,
            progress: progress > 0 ? progress : null
        };
        // check required fields
        if (!skillDetails.skill) {
            return null
        } else {
            console.log("Skill details", skillDetails)
            return skillDetails
        }
    }
    // reset fields
    const resetFields = () => {
        skill.current.value = "";
        setProgress(0)
        // progress.current.getAttribute('aria-valuenow') = 0
        setEditId(null)
    }

    const handleChange = (event, newValue) => {
        setProgress(newValue);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        let skillDet = populateFields()
        if (skillDet) {
            console.log("Skill Details", skillDet)
            let newSkills = updateSkills(skillDet, null);
            setEdit(prevState => [...newSkills])
            resetFields()
            setEditMode(false)
            setEditId(null)
        } else {
            console.log("Missing one or more required fields")
        }
    };

    const updateHandler = (__edit, mode) => {
        if (mode === "update") {
            skill.current.value = __edit.skill
            // progress.current.value = __edit.progress;
            setEditMode(true)
            setEditId(__edit.skillId)
        } else {
            let newSkills = deleteSkills(__edit);
            setEdit(prevState => [...newSkills])
            resetFields()
            setEditMode(false)
            setEditId(null)
        }

    }

    const handleEditSubmit = (evt) => {
        evt.preventDefault()
        let skillDet = populateFields()
        if (skillDet) {
            let newSkills = updateSkills(skillDet, editId);
            setEdit(prevState => [...newSkills])
            resetFields()
            setEditMode(false)
            setEditId(null)
        } else {
            console.log("Missing one or more required fields")
        }
    }
    function valuetext(value) {
        return `${value}%`;
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
                        Skills
                    </Typography>
                    <Typography variant="body1">
                        Add skills you possess relevant to the job you're applying for. This
                        section is optional</Typography>
                </div>
                <hr className={styles.hr} />

                <div>
                    <TextField
                        inputRef={skill}
                        id="outlined-text-input"
                        label="Skill"
                        type="text"
                        variant="outlined"
                        required
                        className={styles.textFieldTest}
                        style={{ width: "100%" }}
                        InputLabelProps={{ className: styles.label }}
                    // defaultValue="First Name"
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body1">Progress: </Typography>
                        <Slider
                            aria-label="Progress"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            onChange={handleChange}
                            step={10}
                            style={{ marginLeft: "24px" }}
                            marks
                            min={10}
                            max={100}
                            inputRef={progress}
                        />
                    </div>

                </div>

                <div className={styles.editBtnWrapper}>
                    {editMode ? (
                        <Button variant="contained" color="primary" onClick={handleEditSubmit}>
                            + <span>UPDATE SKILL</span>
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            + <span>ADD SKILL</span>
                        </Button>
                    )}
                </div>

            </Box>
        </>

    );
}

export default SkillsMui
