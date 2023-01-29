import Navbar from "./ccomponents/navbar/navbar";
import BuildCv from "./pages/cv";
import Home from "./pages/home";
// import Print from "./pages/print"
import Contact from "./pages/contactPage"
import Login from "./pages/login"
import About from "./pages/about"
import ContactContextProvider from "./context/contactContext";

import { BrowserRouter, Routes, Route, Navigate } from "../node_modules/react-router-dom/dist";
import EducationContextProvider from "./context/educationContext";
import CertificationContextProvider from "./context/certificationContext";
import EmploymentContextProvider from "./context/employmentContext";
import SkillsContextProvider from "./context/skillsContext";
import VolunteerContextProvider from "./context/volunteerContext";
import FinalizeContextProvider from "./context/finalizeContext";

export default function App() {
  return (
    <BrowserRouter>
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
                      <Route path="/login" element={<Login />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/about" element={<About />} />
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
    </BrowserRouter>
  );
}
