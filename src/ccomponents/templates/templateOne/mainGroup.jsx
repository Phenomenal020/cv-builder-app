import styles from "./templateOne.module.css";
import { formatFullDate, formatMonth } from "../../helperComponents/helpers";

const MainGroup = props => {
  const {
    educationArr,
    educationHeader,
    employmentArr,
    employmentHeader,
    certificationArr,
    certificationHeader,
    volunteerArr,
    volunteerHeader,
    awardArr,
    awardHeader
  } = props;
  // 

  return (
    <section>
      {/* education */}
      {educationArr.length > 0 ? (
        <section className={styles.educationContainer}>
          <h2 className={styles.educationHeader}>{educationHeader}</h2>

          {educationArr.map(education => {
            return <section
              className={styles.educationWrapper}
              key={Math.random() * 10000}
            >
              <div className={styles.degreeWrapper}>
                {
                  <h3 className={styles.degreeHeader}>{`${education.degree ? education.degree : ""
                    }: ${education.program ? education.program : ""} ${education.gpa ? `(${education.gpa})` : ""
                    }`}</h3>
                }
                {
                  <span className={styles.degreeTime}>{`${education.start ? formatFullDate(education.start) : ""
                    } - ${education.end ? formatFullDate(education.end) : ""
                    }`}</span>
                }
              </div>
              <h3 className={styles.degreeSchool}>{`${education.school ? education.school : ""
                }, ${education.city ? education.city : ""} ${education.state ? education.state : ""
                } ${education.country ? education.country : ""}`}</h3>
            </section>
          })}
        </section>
      ) : (
        ""
      )}

      {/* employment */}
      {employmentArr.length > 0 ? (
        <section className={styles.educationContainer}>
          <h2 className={styles.educationHeader}>{employmentHeader}</h2>
          {employmentArr.map(employment => {
            return (
              <section
                className={styles.educationWrapper}
                key={Math.random() * 10000}
              >
                {employment.jobTitle ? (
                  <div className={styles.degreeWrapper}>
                    <h3 className={styles.degreeHeader}>
                      {employment.jobTitle}
                    </h3>
                    {employment.presently ? (
                      <span className={styles.degreeTime}>present</span>
                    ) : (
                      <span className={styles.degreeTime}>
                        {employment.start
                          ? formatFullDate(employment.start)
                          : ""}
                        - {employment.end ? formatFullDate(employment.end) : ""}
                      </span>
                    )}
                  </div>
                ) : (
                  ""
                )}
                {employment.companyName ? (
                  <h3 className={styles.employmentLoc}>{`${employment.companyName
                    }, ${employment.location ? employment.location : ""}`}</h3>
                ) : (
                  ""
                )}
                {employment.jobDesc ? (
                  <p className={styles.employmentDesc}>{`${employment.jobDesc ? employment.jobDesc : ""
                    }`}</p>
                ) : (
                  ""
                )}
              </section>
            );
          })}
        </section>
      ) : (
        ""
      )}

      {/* certification */}
      <section className={styles.educationContainer}>
        {certificationArr.length > 0 ? (
          <h2 className={styles.educationHeader}>{certificationHeader}</h2>
        ) : (
          ""
        )}
        {certificationArr.length > 0 &&
          certificationArr.map(certification => {
            // console.log("certification", certification)
            return <div key={Math.random() * 100000}>
              <section className={styles.certificationWrapper}>
                <h3 className={styles.certificationHeader}>{`${certification.certification ? certification.certification : ""
                  }`}</h3>
                <h3 className={styles.degreeTime}>{`${(certification.year > -1 || certification.year) ? formatMonth(certification.year) : ""
                  }`}</h3>
              </section>
              <p className={styles.certificationDesc}>
                {certification.other ? certification.other : ""}
              </p>
            </div>
          })}
      </section>

      {/* volunteer */}
      {volunteerArr.length > 0 ? (
        <section className={styles.educationContainer}>
          <h2 className={styles.educationHeader}>{volunteerHeader}</h2>
          {volunteerArr.map(volunteer => {
            return (
              <section
                className={styles.educationWrapper}
                key={Math.random() * 10000}
              >
                {volunteer.position ? (
                  <div className={styles.degreeWrapper}>
                    <h3 className={styles.degreeHeader}>
                      {volunteer.position}
                    </h3>
                    {volunteer.presently ? (
                      <span className={styles.degreeTime}>present</span>
                    ) : (
                      <span className={styles.degreeTime}>
                        {volunteer.start ? formatFullDate(volunteer.start) : ""}
                        - {volunteer.end ? formatFullDate(volunteer.end) : ""}
                      </span>
                    )}
                  </div>
                ) : (
                  ""
                )}
                {volunteer.project ? (
                  <h3 className={styles.employmentLoc}>{`${volunteer.project
                    }, ${volunteer.location ? volunteer.location : ""}`}</h3>
                ) : (
                  ""
                )}
                {volunteer.responsibilities ? (
                  <p className={styles.volunteerDesc}>{`${volunteer.responsibilities ? volunteer.responsibilities : ""
                    }`}</p>
                ) : (
                  ""
                )}
              </section>
            );
          })}
        </section>
      ) : (
        ""
      )}

      {/* award */}
      {awardArr.length > 0 ? (
        <section className={styles.educationContainer}>
          {awardArr ? (
            <h2 className={styles.educationHeader}>{awardHeader}</h2>
          ) : (
            ""
          )}
          {awardArr.length > 0
            ? awardArr.map(award => (
              <section
                className={styles.educationWrapper}
                key={Math.random() * 10000}
              >
                <h3 className={styles.volunteerDesc}>{award}</h3>
              </section>
            ))
            : ""}
        </section>
      ) : (
        ""
      )}
    </section>
  );
};

export default MainGroup;
