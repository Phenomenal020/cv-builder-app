import Hero from "../ccomponents/landing/hero/hero";
import WhyUs from "../ccomponents/landing/whyUs/whyUs";
import ReadyToCreateCv from "../ccomponents/landing/readyToCreateCv/readyToCreateCv";
import CVContents from "../ccomponents/landing/cv_contents/CVContents";
import Footer from "../ccomponents/landing/footer/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <ReadyToCreateCv />
      <CVContents />
      <Footer />
    </div>
  );
};

export default Home;