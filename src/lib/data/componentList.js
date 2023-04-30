import Contact from "../../ccomponents/contact/contact";
import Education from "../../ccomponents/education/education";
import Certifications from "../../ccomponents/certifications/certifications";
import Employment from "../../ccomponents/employment/employment";
import Skills from "../../ccomponents/skills/skills";
// import GreatWork from "../../ccomponents/greatWork/greatWork";
import Volunteer from "../../ccomponents/volunteer/volunteer";
// import CareerObjs from "../../ccomponents/careerObjs/careerObjs";
import Finalize from "../../ccomponents/finalize/finalize";
import ContactTest from "../../ccomponents/contact/contactTest";
import EducationMui from "../../ccomponents/education/educationMui";
import CertificationsMui from "../../ccomponents/certifications/certificationsMui";
import EmploymentMui from "../../ccomponents/employment/employmentMui";
import SkillsMui from "../../ccomponents/skills/skillsMui";
import VolunteerMui from "../../ccomponents/volunteer/volunteerMui";
import FinalizeMui from "../../ccomponents/finalize/finalizeMui";

const componentsList = [
  {
    id: 1,
    pageIndex: 1,
    // component: <Contact />
    component: <ContactTest />
  },
  {
    id: 2,
    pageIndex: 2,
    // component: <Education />
    component: <EducationMui />
  },
  {
    id: 3,
    pageIndex: 3,
    // component: <Certifications />
    component: <CertificationsMui />
  },
  {
    id: 4,
    pageIndex: 4,
    // component: <Employment />
    component: <EmploymentMui />
  },
  {
    id: 5,
    pageIndex: 5,
    // component: <Skills />
    component: <SkillsMui />
  },
  // {
  //   id: 6,
  //   pageIndex: 6,
  //   component: <GreatWork />
  // },
  {
    id: 6,
    pageIndex: 6,
    // component: <Volunteer />
    component: <VolunteerMui />
  },
  // {
  //   id: 8,
  //   pageIndex: 8,
  //   component: <CareerObjs />
  // },
  {
    id: 7,
    pageIndex: 7,
    // component: <Finalize />
    component: <FinalizeMui />
  }
];

export default componentsList;
