import React from "react";
// import Navbar from "../components/Basic Components/Navbar";
import Footer from "../components/Basic Components/Footer";
import Stardir from "../components/Basic Components/Stardir";
import Largecenthead from "../components/Basic Components/Largecenthead";
import Textwithbar from "../components/Basic Components/Textwithbar";
import SpaceComp from "../components/Basic Components/SpaceComp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Copyright from "../components/Basic Components/Copyright";
gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {

  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);

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

    const el2 = left1Ref.current;
    const el3 = left2Ref.current;
    const el4 = left3Ref.current;

    tl.fromTo(
          el2,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.7}
      )
      tl1.fromTo(
          el3,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )
      tl2.fromTo(
          el4,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5}
      )


  }, []);

  return (
    <>
      <SpaceComp height="5vw" />
      <div ref={left1Ref} id="headd1">
      <Largecenthead heading="With our commitment to innovation, We are leading the way towards a new era of seamless, and  profitable trading experiences." />
      <Textwithbar text="Welcome to the TradeCops Blog! Here, you'll find a wealth of information, insights, and expert opinions on the world of trading, investments, and financial markets. Our blog is designed to empower and educate traders like you, helping you make informed decisions and stay ahead in the ever-changing landscape of finance." />
      </div>
      <SpaceComp height="7vw" />
      <Stardir side="right" width="90vw" />
      <div ref={left2Ref} id="headd3">
      <Largecenthead heading="Blogs" />
      </div>
      <Stardir side="left" width="90vw" />
      <div ref={left3Ref} id="headd4">
      <Largecenthead heading="Photos of events" />
      </div>
      <SpaceComp height="10vw" />
      <div className="footer">
        <Footer />
      </div>
      <Copyright/>
    </>
  );
};

export default Blogs;
