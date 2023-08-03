import React from "react";
import Paragr from "../Basic Components/Paragr.jsx";
import Text from "../Basic Components/Text.jsx";
import Figure from "../Basic Components/Figure.jsx";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);

const ServicesOffer = (props) => {

  // const leftRef = useRef(null);
  // const rightRef = useRef(null);
  // const right1Ref = useRef(null);
  // const right2Ref = useRef(null);
  // const right3Ref = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".servicehead",
  //     },
  //   });

  //   const el = leftRef.current;
  //   const el2 = rightRef.current;
  //   const el22 = right1Ref.current;
  //   const el3 = right2Ref.current;
  //   const el32 = right3Ref.current;

  //     tl.fromTo(
  //       el, 
  //       { x: 70, opacity: 0 }, 
  //       { x: 0, opacity: 1, duration: 0.5, delay: 0.4 }
  //     )
  //     .fromTo(
  //       el2,
  //       { x: 70, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 0.5, delay: -0.2}
  //     )
  //     .fromTo(
  //       el22,
  //       { x: 70, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
  //     )
  //     .fromTo(
  //       el3,
  //       { x: 70, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 0.5, delay: -0.2 }
  //     )
  //     .fromTo(
  //       el32,
  //       { x: -70, opacity: 0 },
  //       { x: 0, opacity: 1, duration: 0.8, delay: -0.2 }
  //     )
      
  // }, []);

  return (
    <>
      <div className="lf3text">
        <div className="servicehead" >
          <Paragr image={props.oneimg} heading={props.onehead} />
        </div>
        <div className="lf3textun" >
          <Text text={props.onetext} />
        </div>
        <div className="servicehead" >
          <Paragr image={props.twoimg} heading={props.twohead} />
        </div>
        <div className="lf3textun" >
          <Text text={props.twotext} />
        </div>
      </div>

      <div className="landfeat2fig" >
        <Figure
          width="100%"
          height="100%"
          cenimage={props.img}
          ir="15/85"
          ic="11/91"
          gr="1/80"
          gc="5/90"
          yr="1/40"
          yc="1/80"
        />
      </div>
    </>
  );
};

export default ServicesOffer;
