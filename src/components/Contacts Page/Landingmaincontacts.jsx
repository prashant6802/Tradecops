import React from "react";
import Largeheading from "../Basic Components/Largeheading";
import Figure from "../Basic Components/Figure";
import Text from "../Basic Components/Text";
import Arrowbutton from "../Basic Components/Arrowbutton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Landingmaincontacts = (props) => {

  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);
  const left5Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landmaintexthead",
      },
    });

    const el2 = left1Ref.current;
    const el3 = left2Ref.current;
    const el4 = left3Ref.current;
    const el = left5Ref.current;

    tl.fromTo(
          el2,
          { x: -35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, delay: 1}
      )
      .fromTo(
          el3,
          { x: -35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, delay: -0.4}
      )
      .fromTo(
          el,
          { x: 35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6}
      )
      .fromTo(
          el4,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3}
      )

  }, []);

  return (
    <div className="landmain">
      <div className="landmainhead">
        <div className="landmaintexthead" ref={left1Ref}>
          <Largeheading bot={props.head} />
        </div>
        <div className="landmaintext" ref={left2Ref}>
          <Text text={props.text} />
        </div>
      </div>
      <div className="landmainimage" ref={left5Ref}>
        <Figure
          width="100%"
          height="100%"
          cenimage={props.img}
          ir="5/95"
          ic="1/101"
        />
      </div>
      <div className="getrich" ref={left3Ref}>
        <Arrowbutton text={props.arrbut} />
      </div>
    </div>
  );
};

export default Landingmaincontacts;
