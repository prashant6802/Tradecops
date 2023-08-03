import React from 'react'
import Angelone from "./images/Angelone.png"
import NSE from "./images/NSE.png"
import Zerodha from "./images/Zerodha.png"
import MoneyControl from "./images/MoneyControl.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {

  const left1Ref = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".partner",
      },
    });

    const el2 = left1Ref.current;
    const el = rightRef.current;

    tl.fromTo(
          el2,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, delay: 0.9}
      )
      .fromTo(
          el,
          { x: 25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5}
      )


  }, []);

  return (
    <>
      <div style={{width:"98vw", display:"flex", justifyContent:"center"}}>
        <div className='partner' style={{width:"85%"}}>
        <div className='partnerr' ref={left1Ref}>
            <div style={{width:"47%"}}>
                <img src={Angelone} alt="" width={"100%"} height={"90%"}/>
            </div>
            <div style={{width:"47%"}}>
                <img src={NSE} alt="" width={"100%"} height={"85%"}/>
            </div>
        </div>
        <div className='partnerr' ref={rightRef}>
            <div style={{width:"47%"}}>
                <img src={Zerodha} alt="" width={"100%"} height={"85%"}/>
            </div>
            <div style={{width:"47%"}}>
                <img src={MoneyControl} alt="" width={"100%"} height={"85%"}/>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Partners
