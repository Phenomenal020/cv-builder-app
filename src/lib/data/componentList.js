import Contact from "../../ccomponents/contact/contact";
import Education from "../../ccomponents/education/education";
import Certifications from "../../ccomponents/certifications/certifications";
import Employment from "../../ccomponents/employment/employment";
import Skills from "../../ccomponents/skills/skills";
// import GreatWork from "../../ccomponents/greatWork/greatWork";
import Volunteer from "../../ccomponents/volunteer/volunteer";
// import CareerObjs from "../../ccomponents/careerObjs/careerObjs";
import Finalize from "../../ccomponents/finalize/finalize";

const componentsList = [
  {
    id: 1,
    pageIndex: 1,
    component: <Contact />
  },
  {
    id: 2,
    pageIndex: 2,
    component: <Education />
  },
  {
    id: 3,
    pageIndex: 3,
    component: <Certifications />
  },
  {
    id: 4,
    pageIndex: 4,
    component: <Employment />
  },
  {
    id: 5,
    pageIndex: 5,
    component: <Skills />
  },
  // {
  //   id: 6,
  //   pageIndex: 6,
  //   component: <GreatWork />
  // },
  {
    id: 6,
    pageIndex: 6,
    component: <Volunteer />
  },
  // {
  //   id: 8,
  //   pageIndex: 8,
  //   component: <CareerObjs />
  // },
  {
    id: 7,
    pageIndex: 7,
    component: <Finalize />
  }
];

export default componentsList;
