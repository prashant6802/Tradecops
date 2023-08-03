import React from "react";
import Figure from "../Basic Components/Figure";
import Paragr from "../Basic Components/Paragr";
import Text from "../Basic Components/Text";
import Arrowbutton from "../Basic Components/Arrowbutton";
import paper from "./images/paper.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const LandingFeat3 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lf3fig",
      },
    });

    const el = leftRef.current;
    const el2 = rightRef.current;
    const el3 = right1Ref.current;
    const el4 = right2Ref.current;

    tl.fromTo(el2, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.5 })
      .fromTo(el3, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .fromTo(el4, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
      .fromTo(el, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 });
  }, []);

  return (
    <div className="landfeat3">
      <div className="lf3fig" ref={leftRef}>
        <Figure
          width="100%"
          height="100%"
          cenimage={paper}
          ir="13/85"
          ic="10/94"
          gr="61/101"
          gc="45/101"
          yr="60/101"
          yc="24/101"
        />
      </div>

      <div className="lf3text">
        <div className="lf3head" ref={rightRef}>
          <Paragr
            image="https://i.imgur.com/5fzMln4.png"
            heading="Subscribe For Newsletter"
          />
        </div>
        <div className="lf3textun" ref={right1Ref}>
          <Text text="Stay updated with the latest market trends and trading signals by subscribing to our newsletter. Enter your email address below to never miss an opportunity." />
        </div>
        <div className="lf3button" ref={right2Ref}>
          <Arrowbutton text="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default LandingFeat3;
