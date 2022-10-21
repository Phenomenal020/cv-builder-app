import Navbar from "./ccomponents/navbar/navbar";
import BuildCv from "./pages/cv";
import Home from "./pages/home";
import ContactContextProvider from "./context/contactContext";

import { BrowserRouter, Routes, Route } from "../node_modules/react-router-dom/dist";
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
                      <Route path="/login" element={<div>Login</div>} />
                      <Route path="/contact" element={<div>Contact</div>} />
                      <Route path="/about" element={<div>About</div>} />
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
