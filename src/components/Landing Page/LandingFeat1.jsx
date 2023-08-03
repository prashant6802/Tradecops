import React from "react";
import Figure from "../Basic Components/Figure";
import Paragrtitle from "../Basic Components/Paragrtitle";
import Largeheading from "../Basic Components/Largeheading";
import Paragr from "../Basic Components/Paragr.jsx";
import Text from "../Basic Components/Text";
import man from "./images/man.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const LandingFeat1 = () => {
  
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const righttRef = useRef(null);
  const right1Ref = useRef(null);
  const rightt1Ref = useRef(null);
  const right2Ref = useRef(null);
  const rightt2Ref = useRef(null);
  const right3Ref = useRef(null);
  const rightt3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lf1bhead",
      },
    });

    const el = leftRef.current;
    const el2 = rightRef.current;
    const el22 = righttRef.current;
    const el3 = right1Ref.current;
    const el32 = rightt1Ref.current;
    const el4 = right2Ref.current;
    const el42 = rightt2Ref.current;
    const el5 = right3Ref.current;
    const el52 = rightt3Ref.current;

    tl.fromTo(
      el2,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.5 }
    )
      .fromTo(el22, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 })
      .fromTo(
        el3,
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el32,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el4,
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el42,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el5,
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el52,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(el, { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 });
  }, []);

  return (
    <div className="landfeat1">
      <div className="lf1fig" ref={leftRef}>
        <Figure
          width="100%"
          height="100%"
          cenimage={man}
          ir="15/95"
          ic="20/101"
          gr="1/80"
          gc="5/90"
          yr="1/40"
          yc="1/80"
        />
      </div>

      <div className="lf1text">
        <div className="lf1ghead" ref={rightRef}>
          <Paragrtitle top="JOIN THE TRADECOPS REVOLUTION" />
        </div>
        <div className="lf1bhead" ref={righttRef}>
          <Largeheading bot="Why Choose Us?" />
        </div>
        <div className="lf1ph" ref={right1Ref}>
          <Paragr
            image="https://i.imgur.com/5fzMln4.png"
            heading="Your Trading Oasis"
          />
        </div>
        <div className="lf1pt" ref={rightt1Ref}>
          <Text text="Step into our dedicated workspace designed exclusively for traders like you. Say goodbye to distractions and immerse yourself in an environment that encourages focus and productivity." />
        </div>
        <div className="lf1ph" ref={right2Ref}>
          <Paragr
            image="https://i.imgur.com/TiFCANO.png"
            heading="MQL Copy Trade"
          />
        </div>
        <div className="lf1pt" ref={rightt2Ref}>
          <Text text="Unlock the power of successful traders with our MQL Copy Trade feature. Mirror the trades of expert traders, potentially boosting your profits and generating a consistent income stream." />
        </div>
        <div className="lf1ph" ref={right3Ref}>
          <Paragr
            image="https://i.imgur.com/nTIixdK.png"
            heading="Pamm Account"
          />
        </div>
        <div className="lf1pt" ref={rightt3Ref}>
          <Text text="Let experienced money managers handle your investments with our Pamm Account feature. Benefit from their expertise and maximize returns while you focus on other aspects of your trading journey." />
        </div>
      </div>
    </div>
  );
};

export default LandingFeat1;
