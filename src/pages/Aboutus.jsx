import React from "react";
import Footer from "../components/Basic Components/Footer";
import Stardir from "../components/Basic Components/Stardir";
import Largecenthead from "../components/Basic Components/Largecenthead";
import Textwithbar from "../components/Basic Components/Textwithbar";
import Aboutpeople from "../components/About Page/Aboutpeople";
import SpaceComp from "../components/Basic Components/SpaceComp";
import Partners from "../components/About Page/Partners";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Copyright from "../components/Basic Components/Copyright";
gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {

  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);
  const left4Ref = useRef(null);
  const left5Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#headd1",
      },
    });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#headd3",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#headd4",
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#headd5",
      },
    });

    const el2 = left1Ref.current;
    const el3 = left2Ref.current;
    const el4 = left3Ref.current;
    const el5 = left4Ref.current;
    const el6 = left5Ref.current;

    tl.fromTo(
          el2,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 1}
      )
      .fromTo(
          el3,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )
      tl1.fromTo(
          el4,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )
      tl2.fromTo(
          el5,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )
      tl3.fromTo(
          el6,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )


  }, []);
  
  return (
    <>
      <SpaceComp height="7vh" />
      <div ref={left1Ref} id="headd1">
        <Largecenthead heading="We Set the Bar with the Discount Broking Revolution in India." />
        <Largecenthead heading="Now, We're Shaping the Future with Cutting-Edge Technology." />
      </div>
      <div ref={left2Ref} id="headd2">
        <Textwithbar text="At TradeCops, we are driven by a shared vision to empower traders and investors with the tools, resources, and support they need to thrive in the dynamic world of financial markets. With a team of experienced professionals and a commitment to excellence, we strive to create a trading environment that nurtures growth, fosters innovation, and maximizes profitability." />
      </div>
      <SpaceComp height="6vw" />
      <Stardir side="right" width="90vw" />
      <div ref={left3Ref} id="headd3">
        <Largecenthead heading="People" />
      </div>
      <Stardir side="right" width="30vw" />
      <Aboutpeople />
      <SpaceComp height="3vw" />
      <div ref={left4Ref} id="headd4">
        <Largecenthead heading="Trusted By" />
      </div>
      <SpaceComp height="4vw" />
      <Partners />
      <SpaceComp height="10vw" />
      <div ref={left5Ref} id="headd5">
        <Largecenthead heading="Together, our team is committed to providing exceptional services, innovative solutions, and a supportive trading environment that enables our clients to achieve their financial goals." />
      </div>
      <Stardir side="right" width="30vw" />
      <SpaceComp height="15vw" />
      <div className="footer">
        <Footer />
      </div>
        <Copyright/>
    </>
  );
};

export default Aboutus;
