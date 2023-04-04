import styles from "./templateTwo.module.css"
import React, { useRef } from 'react';
import { formatFullDate, formatMonth } from "../../helperComponents/helpers";

const TemplateTwo = props => {

    // const componentRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //     documentTitle: "Print cv",
    //     onAfterPrint: () => alert("Print success")
    // })

    const {
        contact,
        education,
        certificationArr,
        employment,
        skills,
        volunteer,
        finalize
    } = props;

    // console.log("finalize", finalize)
    const { award, custom, extraCurricular, language, membership, academicWork } = finalize;

    return (
        <div className={styles.container}>

            {/* contact details */}
            <section className={styles.contactWrapper}>
                <h1 className={styles.displayName}>{contact.firstName} {contact.lastName} {contact.otherNames ? contact.otherNames : ""}</h1>
                <h4 className={styles.role}>{contact.role}</h4>
                <p className={styles.otherDetails}>
                    {contact.phoneNumber && <span className={styles.otherDetail}>{contact.phoneNumber}</span>}
                    {contact.email && <span className={styles.otherDetail}>{contact.email}</span>}
                    {(contact.website || contact.github || contact.linkedIn) &&
                        <span className={styles.otherDetail}>{contact.website ? contact.website : contact.github ? contact.github : contact.linkedIn ? contact.linkedIn : ""}</span>}
                    {(contact.country || contact.state) && <span className={styles.otherDetail}>{contact.state ? `${contact.state},` : ""} {contact.country ? `${contact.country}.` : ""}</span>}
                </p>
            </section>

            {/* summary */}
            {contact.headline &&
                <section className={styles.summaryWrapper}>
                    <h3 className={styles.headerText}>Summary</h3>
                    <hr className={styles.horizontalRule} />
                    <p className={styles.summaryText}>{contact.headline}</p>
                </section>}

            {/* education */}
            {education.length > 0 &&
                <section className={styles.educationWrapper}>
                    <h3 className={styles.headerText}>Education</h3>
                    <hr className={styles.horizontalRule} />

                    {education.map(educationItem => {
                        return <div key={Math.random() * 10000} className={styles.educationItemSection}>
                            <div className={styles.schoolNameWrapper}>
                                <h3 className={styles.schoolNameText}>{`${educationItem.school}`}{educationItem.state ? `, ${educationItem.state}` : ""}{educationItem.country ? `. ${educationItem.country}` : ""}</h3>
                                <span className={styles.schoolDuration}>{`${educationItem.start ? formatFullDate(educationItem.start) : ""
                                    } - ${educationItem.end ? formatFullDate(educationItem.end) : ""
                                    }`}</span>
                            </div>
                            <p className={styles.degree}>{`${educationItem.degree},`} {educationItem.program}</p>
                            {educationItem.gpa && <p className={styles.grade}>Grade: {educationItem.gpa}</p>}

                            {/* relevant courses taken */}
                            <div className={styles.relevantCoursesWrapper}>
                                {educationItem.relevantCourses ? <p className={styles.relevantCoursesText}><span className={styles.relevantCoursesHeader}>Relevant courses taken: </span>{educationItem.relevantCourses}</p> : ""}
                            </div>

                            <div className={styles.projectWrapper}>
                                {educationItem.project ?
                                    <p className={styles.projectText}><span className={styles.projectHeader}>Project: </span>{educationItem.project}</p> : ""}

                            </div>
                        </div>
                    })}

                </section>}

            {/* experience */}
            {employment.length > 0 && <section className={styles.experienceWrapper}>
                <h3 className={styles.headerText}>Experience</h3>
                <hr className={styles.horizontalRule} />

                {employment.length > 0 && employment.map(employmentItem => {
                    return <div key={Math.random() * 10000} className={styles.employmentItemSection}><div className={styles.experiencePlaceWrapper}>
                        <h3 className={styles.companyText}>{employmentItem.companyName ? `${employmentItem.companyName},` : ""} {employmentItem.location ? employmentItem.location : ""}</h3>
                        <span className={styles.employmentDuration}>{employmentItem.start
                            ? formatFullDate(employmentItem.start)
                            : ""} - {employmentItem.presently ? "present" : employmentItem.end ? formatFullDate(employmentItem.end) : ""}</span>
                    </div>
                        <p className={styles.jobRole}>{employmentItem.jobTitle}</p>
                        {/* <ul className={styles.jobDesc}>
                            <li className={styles.jobDescItem}>Developing the front-end bla bla bla</li>
                            <li className={styles.jobDescItem}>Developing the front-end bla bla bla</li>

                            <li className={styles.jobDescItem}>{employmentItem.jobDesc}</li>
                        </ul> */}
                        <p className={styles.jobDescText}>{employmentItem.jobDesc}</p>
                    </div>
                })}
            </section>}

            {/* skills */}
            {skills.length > 0 &&
                <section className={styles.skillsWrapper}>
                    <h3 className={styles.headerText}>Skills</h3>
                    <hr className={styles.horizontalRule} />
                    <div className={styles.skillsItemWrapper}>
                        {skills.map(skillItem => {
                            return <span className={styles.skillItem} key={Math.random() * 1000}>{skillItem.skill} </span>
                        })}
                    </div>
                </section>}

            {/* certifications and trainings */}
            {certificationArr.length > 0 &&
                <section className={styles.certificationsWrapper}>
                    <h3 className={styles.headerText}>Certifications, Trainings and MOOCs</h3>
                    <hr className={styles.horizontalRule} />

                    {certificationArr.map(certificate => {
                        return <div className={styles.certificationWrapper} key={Math.random() * 10000}>

                            <div className={styles.certificationItemWrapper}>
                                {certificate.certification && <h3 className={styles.certificationHeaderText}>{certificate.certification}</h3>}
                                {certificate.year ? (certificate.year === "ongoing" ? <span>ongoing</span> : <span>{formatMonth(certificate.year)}</span>) : ""}
                            </div>
                            {certificate.other && <p className={styles.certificationDesc}>{certificate.other}</p>}
                            {certificate.link && <a href={certificate.link} target="_blank" rel="noreferrer">Link: {certificate.link}</a>}
                        </div>
                    })}
                </section>}

            {/* experience */}
            {volunteer.length > 0 && <section className={styles.experienceWrapper}>
                <h3 className={styles.headerText}>Volunteer Experience</h3>
                <hr className={styles.horizontalRule} />

                {volunteer.length > 0 && volunteer.map(volunteerItem => {
                    return <div key={Math.random() * 10000} className={styles.employmentItemSection}><div className={styles.experiencePlaceWrapper}>
                        <h3 className={styles.companyText}>{volunteerItem.project ? `${volunteerItem.project},` : ""} {volunteerItem.location ? volunteerItem.location : ""}</h3>
                        <span className={styles.employmentDuration}>{volunteerItem.start
                            ? formatFullDate(volunteerItem.start)
                            : ""} - {volunteerItem.presently ? "present" : volunteerItem.end ? formatFullDate(volunteerItem.end) : ""}</span>
                    </div>
                        <p className={styles.jobRole}>{volunteerItem.position}</p>
                        {/* <ul className={styles.jobDesc}>
                            <li className={styles.jobDescItem}>Developing the front-end bla bla bla</li>
                            <li className={styles.jobDescItem}>Developing the front-end bla bla bla</li>

                            <li className={styles.jobDescItem}>{employmentItem.jobDesc}</li>
                        </ul> */}
                        <p className={styles.jobDescText}>{volunteerItem.responsibilities}</p>
                    </div>
                })}
            </section>}

            {/* Award/Honours */}
            {award.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Awards/Honours</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {award.map(awardItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{awardItem}</li>
                    })}
                </ul>
            </section>}

            {/* Acdemic works and Publications */}
            {academicWork.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Publications and Academic Work</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {academicWork.map(academicWorkItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{academicWorkItem}</li>
                    })}
                </ul>
            </section>}

            {/* Memberships and Professional bodies */}
            {membership.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Memberships and Professional bodies</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {membership.map(membershipItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{membershipItem}</li>
                    })}
                </ul>
            </section>}

            {/* Languages */}
            {language.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Language</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {language.map(languageItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{languageItem}</li>
                    })}
                </ul>
            </section>}

            {/* extra-curricular activities */}
            {extraCurricular.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Extra-curricular activities</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {extraCurricular.map(extraCurricularItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{extraCurricularItem}</li>
                    })}
                </ul>
            </section>}

            {/* custom */}
            {custom.length > 0 && <section className={styles.activitiesWrapper}>
                <h3 className={styles.headerText}>Custom</h3>
                <hr className={styles.horizontalRule} />
                <ul className={styles.activitiesUl}>
                    {custom.map(customItem => {
                        return <li className={styles.activitiesText} key={Math.random() * 1000}>{customItem}</li>
                    })}
                </ul>
            </section>}

        </div>
    )
}

export default TemplateTwo