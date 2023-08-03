import React from "react";
// import Navbar from "../components/Basic Components/Navbar";
// import Landingmain from "../components/Basic Components/Landingmain";
import Stardir from "../components/Basic Components/Stardir";
import Largecenthead from "../components/Basic Components/Largecenthead";
import Textwithbar from "../components/Basic Components/Textwithbar";
import Contactsdetails from "../components/Contacts Page/Contactsdetails";
import Footer from "../components/Basic Components/Footer";
import SpaceComp from "../components/Basic Components/SpaceComp";
import phone from "../components/Contacts Page/images/phone.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Copyright from "../components/Basic Components/Copyright";
import Landingmaincontacts from "../components/Contacts Page/Landingmaincontacts";
gsap.registerPlugin(ScrollTrigger);

const ContactUs = (props) => {

  const left3Ref = useRef(null);
  const left4Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".conthead",
      },
    });

    const el4 = left3Ref.current;
    const el5 = left4Ref.current;

    tl.fromTo(
          el4,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.7}
      )
      .fromTo(
          el5,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6}
      )

  }, []);

  return (
    <>
      <SpaceComp height="4vw" />
      <Landingmaincontacts
        head="Need a Quick Query?"
        text="It would be great to hear from you! If you have any questions or inquiries, we are here to assist you. We value your feedback and look forward to addressing any concerns you may have. Rest assured, we strive to provide prompt and helpful responses. Contact us today!"
        img={phone}
        arrbut="Call Us"
      />
      <Stardir side="right" width="70vw" />
      <Stardir side="right" width="50vw" />
      <SpaceComp height="15vw" />
      <div ref={left3Ref} id="conthead">
      <Largecenthead heading="Contact Us" />
      </div>
      <div ref={left4Ref}>
      <Textwithbar text="We are always ready to help. There are multiple ways to get in touch with us. You may drop us a line, give us a call, or send an email using the contact form below. Our dedicated team will respond to your message within 24 hours." />
      </div>
      <SpaceComp height="10vh" />
      <Stardir side="left" width="90vw" />
      <Contactsdetails />
      <SpaceComp height="3vw" />
      <Stardir side="right" width="70vw" />
      <SpaceComp height="10vh" />
      <div className="footer">
        <Footer />
      </div>
      <Copyright/>
    </>
  );
};

export default ContactUs;
