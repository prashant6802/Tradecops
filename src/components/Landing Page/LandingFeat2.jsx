import React from "react";
import Figure from "../Basic Components/Figure";
import Paragrtitle from "../Basic Components/Paragrtitle.jsx";
import Paragr from "../Basic Components/Paragr.jsx";
import Text from "../Basic Components/Text.jsx";
import Largeheading from "../Basic Components/Largeheading";
import coins from "./images/coins.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const LandingFeat2 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const righttRef = useRef(null);
  const right1Ref = useRef(null);
  const rightt1Ref = useRef(null);
  const right2Ref = useRef(null);
  const rightt2Ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landfeat2text",
      },
    });

    const el = leftRef.current;
    const el2 = rightRef.current;
    const el22 = righttRef.current;
    const el3 = right1Ref.current;
    const el32 = rightt1Ref.current;
    const el4 = right2Ref.current;
    const el42 = rightt2Ref.current;

    tl.fromTo(
      el2,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, delay: 0.5 }
    )
      .fromTo(
        el22,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: -0.2 }
      )
      .fromTo(
        el3,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
      )
      .fromTo(
        el32,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: -0.2 }
      )
      .fromTo(
        el4,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: -0.2 }
      )
      .fromTo(
        el42,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: -0.2 }
      )
      .fromTo(el, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 });
  }, []);

  return (
    <div className="landfeat2">
      <div className="landfeat2text">
        <div className="landfeat2shead" ref={rightRef}>
          <Paragrtitle top="ADVANTAGES" width="100%" height="100%" />
        </div>
        <div className="landfeat2bhead" ref={righttRef}>
          <Largeheading
            bot="How TradeCops Can Help You:"
            width="100%"
            height="100%"
          />
        </div>
        <div className="landfeat2jhead" ref={right1Ref}>
          <Paragr
            image="https://i.imgur.com/5fzMln4.png"
            heading="Clever Notifications"
          />
        </div>
        <div className="landfeat2p" ref={rightt1Ref}>
          <Text text="🔹 Capitalize On Our Favorable Trading Environment And Experience Capital Compounding Like Never Before." />
        </div>
        <div className="landfeat2p" ref={right2Ref}>
          <Text text="🔹 Harness The Power Of Copy Trading And Signals Generation To Optimize Your Trading Strategies And Maximize Profits." />
        </div>
        <div className="landfeat2p" ref={rightt2Ref}>
          <Text text="🔹 Join Our Franchise Business Model And Become A Part Of Our Network Of Successful Traders." />
        </div>
      </div>

      <div className="landfeat2fig" ref={leftRef}>
        <Figure
          width="100%"
          height="100%"
          cenimage={coins}
          ir="11/91"
          ic="11/91"
          gr="1/80"
          gc="5/90"
          yr="1/40"
          yc="1/80"
        />
      </div>
    </div>
  );
};

export default LandingFeat2;
