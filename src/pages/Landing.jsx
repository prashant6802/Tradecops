import React from "react";
import Images from "../components/Basic Components/Images";
// import Navbar from "../components/Basic Components/Navbar";
import LandingFeat1 from "../components/Landing Page/LandingFeat1";
import LandingFeat2 from "../components/Landing Page/LandingFeat2";
import LandingFeat3 from "../components/Landing Page/LandingFeat3";
import Landingmain from "../components/Basic Components/Landingmain";
import Faqland from "../components/Landing Page/Faqland";
import Footer from "../components/Basic Components/Footer";
import Stardir from "../components/Basic Components/Stardir";
import SpaceComp from "../components/Basic Components/SpaceComp";
import Copyright from "../components/Basic Components/Copyright";
import arrow from "../components/Landing Page/images/arrow.png"
import Testimonial from "../components/Landing Page/Testimonial";

const Landing = () => {
  return (
    <div>
      <SpaceComp height="2vw" />
      <Landingmain
        head="Discover A New Era Of Trading Excellence"
        text="Are you ready to take your trading to new heights? Look no further! TradeCops Private Limited is here to revolutionize the way you trade. Our innovative platform offers a unique blend of cutting-edge technology, expert guidance, and a supportive community. Get ready to unlock your trading potential and achieve unparalleled success."
        img={arrow}
        arrbut="Get Rich"
      />

      <Stardir side="right" width="70vw" />
      <Stardir side="right" width="50vw" />
      <SpaceComp height="14vw" />
      <LandingFeat1 />
      <SpaceComp height="7vw" />
      <Stardir side="right" width="40vw" />
      <LandingFeat2 />
      <SpaceComp height="5vw" />
      <Stardir side="right" width="90vw" />
      <LandingFeat3 />
      <SpaceComp height="10vw" />
      <Testimonial/>
      <SpaceComp height="10vh" />
      <div className="faq">
        <Faqland />
      </div>
      <SpaceComp height="10vw" />
      <div className="imageal">
        <Images head="Ready To Get Started?" but="Download App" />
      </div>
      <SpaceComp height="7vw" />
      <div className="footer">
        <Footer />
      </div>
      <Copyright/>
    </div>
  );
};

export default Landing;
