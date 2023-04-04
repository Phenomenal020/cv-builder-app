import styles from "./templateThree.module.css"
import { formatFullDate, formatMonth } from "../../helperComponents/helpers";

const TemplateThree = (props) => {

    const {
        contact,
        education,
        certificationArr,
        employment,
        skills,
        volunteer,
        finalize
    } = props;

    const { award, custom, extraCurricular, language, membership, academicWork } = finalize;

    return (
        <section className={styles.container}>

            {contact.headline || localStorage.getItem("profileImage") ? <section className={styles.headBar}>
                {localStorage.getItem("profileImage") ?
                    <div className={styles.profileImgWrapper}>
                        <img src={localStorage.getItem("profileImage")} className={styles.profileImg} alt="display" />
                    </div>
                    : ""}

                {contact.headline ? <section className={styles.summaryBar}>
                    <h3 className={styles.summaryHeader}>Summary</h3>
                    <p className={styles.summaryText}>{contact.headline}</p>
                </section> : ""}
            </section> : <p>Nothing here yet</p>}


            <section className={styles.bodyBar}>
                <section className={styles.leftBar}>

                    {contact.role ? <div className={styles.roleWrapper}>
                        {contact.firstName ? <p className={styles.firstName}>{contact.firstName} {contact.otherNames ? contact.otherNames : ""}</p> : ""}
                        {contact.lastName ? <p className={styles.lastName}>{contact.lastName}</p> : ""}
                        {contact.role ? <p className={styles.profileRole}>{contact.role}</p> : ""}
                    </div> : ""}

                    {contact.firstName ? <div className={styles.contactWrapper}>
                        <h3 className={styles.contactHeader}>Contact</h3>
                        {contact.email ? <div className={styles.contactRow}>
                            <i className="fa fa-envelope" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.email}</p>
                        </div> : ""}
                        {contact.phoneNumber ? <div className={styles.contactRow}> <i className="fa fa-phone" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.phoneNumber}</p>
                        </div> : ""}
                        {(contact.state || contact.country) ? <div className={styles.contactRow}>
                            <i className="fa fa-map-marker" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.state ? contact.state : ""}{contact.country ? `, ${contact.country}` : ""}</p>
                        </div> : ""}
                        {contact.linkedIn ? <div className={styles.contactRow}>
                            <i className="fa fa-linkedin" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.linkedIn}</p>
                        </div> : ""}
                        {contact.github ? <div className={styles.contactRow}>
                            <i className="fa fa-github" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.github}</p>
                        </div> : ""}
                        {contact.website ? <div className={styles.contactRow}>
                            <i className="fa fa-globe" aria-hidden="true" style={{ marginRight: '4px', width: '16px', fontSize: "12px" }}></i> <p className={styles.contactText}>{contact.website}</p>
                        </div> : ""}
                    </div> : ""}

                    {skills.length > 0 ? <div className={styles.skillWrapper}>
                        <h3 className={styles.skillHeader}>Skills</h3>
                        <ul className={styles.skillUl}>
                            {skills.map(skillItem => {
                                return <li className={styles.skillRow} key={skillItem.skillId}>{skillItem.skill}</li>
                            })}
                        </ul>
                    </div> : ""}
                </section>

                <section className={styles.mainBar}>

                    {education.length > 0 ? <section className={styles.summaryBar}>
                        <h3 className={styles.educationHeader}>Education</h3>

                        {education.map(educationItem => {
                            return <div key={educationItem.educationId} className={styles.educationBox}>
                                <p className={styles.dateHeader}>{`${educationItem.start ? formatFullDate(educationItem.start) : ""
                                    } - ${educationItem.end ? formatFullDate(educationItem.end) : ""
                                    }`}</p>
                                <div className={styles.detailBox}>
                                    <p className={styles.degreeText}>{educationItem.degree || educationItem.program ? <span className={styles.degreeSpan}>{educationItem.degree ? educationItem.degree : ""}</span> : ""}{educationItem.program ? `, ${educationItem.program}` : ""} {educationItem.gpa ? ` (${educationItem.gpa})` : ""}</p>
                                    {(educationItem.school || educationItem.country || educationItem.state) ? <p className={styles.schoolText}>{educationItem.school ? `${educationItem.school}` : ""}{educationItem.state ? `, ${educationItem.state}` : ""}{educationItem.country ? `. ${educationItem.country}` : ""}</p> : ""}
                                    {educationItem.relevantCourses ? <div className={styles.contentTextBox}>
                                        <p className={styles.contentText}>Content: </p>
                                        <p className={styles.contentParagraph}>{educationItem.relevantCourses}</p>
                                    </div> : ""}
                                    {educationItem.project ? <div className={styles.contentTextBox}>
                                        <p className={styles.projectText}>project: </p>
                                        <p className={styles.contentParagraph}>{educationItem.project}</p>
                                    </div> : ""}
                                </div>
                            </div>
                        })}
                    </section> : ""}

                    {employment.length > 0 ? <section className={styles.summaryBar}>
                        <h3 className={styles.experienceHeader}>Experience</h3>
                        {employment.map(employmentItem => {
                            return <div className={styles.experienceBox} key={employmentItem.jobId}>
                                <p className={styles.dateHeader}>{employmentItem.start
                                    ? formatFullDate(employmentItem.start)
                                    : ""} - {employmentItem.presently ? "present" : employmentItem.end ? formatFullDate(employmentItem.end) : ""}</p>
                                <div className={styles.detailBox}>
                                    {employmentItem.jobTitle || employmentItem.location || employmentItem.companyName ? <p className={styles.experienceText}>{employmentItem.jobTitle ? employmentItem.jobTitle : ""}{employmentItem.companyName ? `, ${employmentItem.companyName}` : ""}{employmentItem.location ? `. ${employmentItem.location}` : ""}</p> : ""}
                                    {employmentItem.jobDesc ? <div className={styles.contentTextBox}>
                                        <p className={styles.jobDesc}>Activities:</p>
                                        <p className={styles.contentParagraph}>{employmentItem.jobDesc}</p>
                                    </div> : ""}
                                </div>
                            </div>
                        })}
                    </section> : ""}

                    {volunteer.length > 0 ? <section className={styles.summaryBar}>
                        <h3 className={styles.experienceHeader}>Volunteer Experience</h3>
                        {volunteer.map(volunteerItem => {
                            return <div className={styles.experienceBox} key={volunteerItem.volunteerId}>
                                <p className={styles.dateHeader}>{volunteerItem.start
                                    ? formatFullDate(volunteerItem.start)
                                    : ""} - {volunteerItem.presently ? "present" : volunteerItem.end ? formatFullDate(volunteerItem.end) : ""}</p>
                                <div className={styles.detailBox}>
                                    {volunteerItem.position || volunteerItem.location || volunteerItem.project ? <p className={styles.experienceText}>{volunteerItem.position ? volunteerItem.position : ""}{volunteerItem.project ? `, ${volunteerItem.project}` : ""}{volunteerItem.location ? `. ${volunteerItem.location}` : ""}</p> : ""}
                                    {volunteerItem.responsibilities ? <div className={styles.contentTextBox}>
                                        <p className={styles.jobDesc}>Activities:</p>
                                        <p className={styles.contentParagraph}>{volunteerItem.responsibilities}</p>
                                    </div> : ""}
                                </div>
                            </div>
                        })}
                    </section> : ""}

                    {certificationArr.length > 0 ? <section className={styles.summaryBar}>
                        <h3 className={styles.experienceHeader}>Certifications</h3>
                        {certificationArr.map(certificate => {
                            return <div className={styles.certBox} key={certificate.certId}>
                                {certificate.year ? (certificate.year === "ongoing") ? <p className={styles.certDate}>ongoing</p> : <p className={styles.certDate}>{formatMonth(certificate.year)}</p> : ""}
                                <div className={styles.certificationDetails}>
                                    {certificate.certification ? <p className={styles.certHeader}>{certificate.certification}</p> : ""}
                                    {certificate.other ? <div className={styles.certContentBox}><span className={styles.certContentSpan}>Content: </span> <p className={styles.certContentParagraph}>{certificate.other}</p></div> : ""}
                                    {certificate.link ? <div className={styles.certContentBox}><span className={styles.certContentSpan}>Link: </span> <p className={styles.certContentParagraphLink}><a href={`${certificate.link}`}>{certificate.link}</a></p></div> : ""}
                                </div>
                            </div>
                        })}
                    </section> : ""}


                    {/* Award/Honours */}
                    {award.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Awards/Honours</h3>
                        <ul className={styles.activitiesUl}>
                            {award.map(awardItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{awardItem}</li>
                            })}
                        </ul>
                    </section>}

                    {/* Acdemic works and Publications */}
                    {academicWork.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Publications and Academic Work</h3>
                        <ul className={styles.activitiesUl}>
                            {academicWork.map(academicWorkItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{academicWorkItem}</li>
                            })}
                        </ul>
                    </section>}

                    {/* Memberships and Professional bodies */}
                    {membership.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Memberships and Professional bodies</h3>
                        <ul className={styles.activitiesUl}>
                            {membership.map(membershipItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{membershipItem}</li>
                            })}
                        </ul>
                    </section>}

                    {/* Languages */}
                    {language.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Language</h3>
                        <ul className={styles.activitiesUl}>
                            {language.map(languageItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{languageItem}</li>
                            })}
                        </ul>
                    </section>}

                    {/* extra-curricular activities */}
                    {extraCurricular.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Extra-curricular activities</h3>
                        <ul className={styles.activitiesUl}>
                            {extraCurricular.map(extraCurricularItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{extraCurricularItem}</li>
                            })}
                        </ul>
                    </section>}

                    {/* custom */}
                    {custom.length > 0 && <section className={styles.summaryBar}>
                        <h3 className={styles.headerText}>Custom</h3>
                        <ul className={styles.activitiesUl}>
                            {custom.map(customItem => {
                                return <li className={styles.activitiesText} key={Math.random() * 1000}>{customItem}</li>
                            })}
                        </ul>
                    </section>}

                </section>
            </section>



        </section >
    )
}

export default TemplateThree