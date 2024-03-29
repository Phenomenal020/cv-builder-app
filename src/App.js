import Navbar from "./ccomponents/navbar/navbar";
import BuildCv from "./pages/cv";
import Home from "./pages/home";
// import Print from "./pages/print"
import Login from "./pages/login";
import About from "./pages/about";
import ContactContextProvider from "./context/contactContext";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "../node_modules/react-router-dom/dist";
import EducationContextProvider from "./context/educationContext";
import CertificationContextProvider from "./context/certificationContext";
import EmploymentContextProvider from "./context/employmentContext";
import SkillsContextProvider from "./context/skillsContext";
import VolunteerContextProvider from "./context/volunteerContext";
import FinalizeContextProvider from "./context/finalizeContext";
import PageContextProvider from "./context/pageContext";
import TemplateContextProvider from "./context/templateContext";
import ContactTest from "./ccomponents/contact/contactTest";
import EducationMui from "./ccomponents/education/educationMui";
import CertificationsMui from "./ccomponents/certifications/certificationsMui";
import Auth from "./pages/auth";

export default function App() {
  return (
    <BrowserRouter>
      <TemplateContextProvider>
        <PageContextProvider>
          <ContactContextProvider>
            <EducationContextProvider>
              <CertificationContextProvider>
                <EmploymentContextProvider>
                  <SkillsContextProvider>
                    <VolunteerContextProvider>
                      <FinalizeContextProvider>
                        <Navbar />
                        <Routes>
                          {/* Index page */}
                          <Route path="/" element={<Home />} />
                          {/* CV create page */}
                          <Route path="/create" element={<BuildCv />} />
                          {/* <Route path="/login" element={<Login />} /> */}
                          <Route path="/signin" element={<Auth />} />
                          <Route path="/about" element={<About />} />
                          {/* <Route path="/test" element={<EducationMui />} /> */}
                          <Route path="/test" element={<CertificationsMui />} />
                          {/* <Route path="/print" element={<Print />} /> */}
                          {/* <Route path="/redirect" element={<Navigate to="/print" />} /> */}
                        </Routes>
                      </FinalizeContextProvider>
                    </VolunteerContextProvider>
                  </SkillsContextProvider>
                </EmploymentContextProvider>
              </CertificationContextProvider>
            </EducationContextProvider>
          </ContactContextProvider>
        </PageContextProvider>
      </TemplateContextProvider>
    </BrowserRouter>
  );
}
