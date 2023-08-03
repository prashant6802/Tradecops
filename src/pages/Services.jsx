import React from "react";
import Landingmain from "../components/Basic Components/Landingmain";
import Images from "../components/Basic Components/Images";
import Footer from "../components/Basic Components/Footer";
import ServicesAllOffers from "../components/Services Page/ServicesAllOffers";
import Stardir from "../components/Basic Components/Stardir";
import SpaceComp from "../components/Basic Components/SpaceComp";
import Copyright from "../components/Basic Components/Copyright";
import cards from "../components/Services Page/images/cards.png"
import Elevate from "../components/Services Page/Elevate";

const Services = () => {
  return (
    <>
      <SpaceComp height="4vw" />
      <Landingmain
        head="Services Offered by TradeCops"
        text="At TradeCops, we are committed to providing a comprehensive range of services that empower traders like you to succeed in the ever-evolving financial markets. Our offerings are designed to enhance your trading experience, maximize profitability, and provide you with the tools and support you need to achieve your financial goals."
        img={cards}
        arrbut="Get Rich"
      />
      <Stardir side="right" width="70vw" />
      <Stardir side="right" width="50vw" />
      <ServicesAllOffers />
      <SpaceComp height="7vh"/>
      <Elevate/>
      <SpaceComp height="7vh"/>
      <div className="imageal">
        <Images
          head="TradeCops - Empowering Traders for Success!"
          but="Get Started"
        />
      </div>
      <Stardir side="right" width="80vw" />
      <SpaceComp height="10vw"/>
      <div className="footer">
        <Footer />
      </div>
      <Copyright/>
    </>
  );
};

export default Services;
