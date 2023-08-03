import React from "react";
// import Navbar from "../components/Basic Components/Navbar";
import Text from "../components/Basic Components/Text";
import Footer from "../components/Basic Components/Footer";
import Stardir from "../components/Basic Components/Stardir";
import Largecenthead from "../components/Basic Components/Largecenthead";
import Copyright from "../components/Basic Components/Copyright";
import SpaceComp from "../components/Basic Components/SpaceComp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TermsAndConditions = (props) => {

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ter",
      },
    });

    const el = leftRef.current;
    const el2 = rightRef.current;

    tl.fromTo(el, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1 })
      .fromTo(el2, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
  }, []);


  return (
    <>
      <SpaceComp height="8vh" />
      <Stardir side="left" width="90vw" />
      <div ref={leftRef} id="ter">
      <Largecenthead heading={props.heading} />
      </div>
      <div style={{ width: "98vw", display: "flex" }} ref={rightRef}>
        <div style={{ width: "10%" }}></div>
        <div
          style={{
            width: "80%",
            fontSize: "1.5vw",
            borderTop: "1px solid black",
            paddingTop: "3vw",
          }}
        >
          <Text text="The use of this website and services on this website provided by Tradecops Private Limited (hereinafter referred to as “Owner”) are subject to the following Terms & Conditions (hereinafter the “Terms of Service”), all parts and sub-parts of which are specifically incorporated by reference here together with the Privacy Policy. Following are the Terms pf Service governing your use of www.tradecops.com (the “Website”), all pages on the Website and any services provided by or on this Website (“Services”)." />
          <Text text="By accessing either directly or through a hyperlink, the Website, and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the Terms of Service including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation vendors, buyers, customers, merchants, browsers and/ or contributors of content. You acknowledge and agree that the Website may use your personal information in the manner described in our Privacy Policy which sets forth how information collected about you is collected, used and stored." />
          <Text text="1) DEFINITIONS" />
          <Text text="The parties referred to in these Terms of Service shall be defined as follows:" />
          <Text text="a) Owner, Us, We: The Owner, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. Tradecops Private Limited , Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as all employees and affiliates of the Owner." />
          <Text text="b) You, the User, the Client: You, as the user of the Website, will be referred to throughout these Terms of Service with second-person pronouns such as You, Your, Yours, or as User or Client. For the purpose of these Terms of Service, the term “User” or “you” shall mean any natural or legal person who person is accessing the Website. The term ‘”Your” shall be construed accordingly." />
          <Text text="c) Parties: Collectively, the parties to these Terms of Service (the Owner and You) will be referred to as Parties." />
          <Text text="2) ASSENT & ACCEPTANCE" />
          <Text text="By using the Website, You warrant that You have read and reviewed these Terms of Service and that You agree to be bound by it. If You do not agree to be bound by these Terms of Service, please leave the Website immediately. The Owner only agrees to provide use of this Website and Services to You if You assent to these Terms of Service. Further, based on the Services obtained by a User, additional terms and conditions in respect of the specific Services may apply, which shall be deemed an agreement between the Users and the Owner." />
          <Text text="3) ABOUT THE SITE" />
          <Text text="The Website is an online store which carries out sale of the following: Stock market courses. We reserve the right to refuse service or refuse to sell the products on the Website at our sole discretion to anyone for any reason at any time." />
          <Text text="The Website does not screen or censor the users who register on and access the Website. You assume all risks associated with dealing with other users with whom you come in contact through the Website. You agree to use the Website only for lawful purposes without infringing the rights or restricting the use of this Website by any third party." />
          <Text text="4) LICENSE TO USE WEBSITE" />
          <Text text="The Owner may provide You with certain information as a result of Your use of the Website or Services. Such information may include, but is not limited to, documentation, data, or information developed by the Owner, and other materials which may assist in Your use of the Website or Services (“Owner Materials”). Subject to these Terms of Service, the Owner grants You a non-exclusive, limited, non-transferable and revocable license to use the Owner Materials solely in connection with Your use of the Website and Services. The Owner Materials may not be used for any other purpose and this license terminates upon Your cessation of use of the Website or Services or at the termination of these Terms of Service." />
          <Text text="You agree not to collect contact information of other Users from the Website or download or copy any information by means of unsolicited access so as to communicate directly with them or for any reason whatsover." />
          <Text text="Any unauthorized use by you shall terminate the permission or license granted to you by the Website and You agree that you shall not bypass any measures used by the Owner to prevent or restrict access to the Website." />
          <Text text="5) INTELLECTUAL PROPERTY" />
          <Text text="You agree that the Website and all Services provided by the Owner are the property of the Owner, including all copyrights, trademarks, trade secrets, patents and other intellectual property (“Owner IP”). You agree that the Owner owns all right, title and interest in and to the Owner IP and that You will not use the Owner IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Owner IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Owner." />
        </div>
      </div>
      <SpaceComp height="10vw" />
      <div className="footer">
        <Footer />
      </div>
      <Copyright/>
    </>
  );
};

export default TermsAndConditions;
