import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Copyright = () => {

  const left3Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".copyright",
      },
    });

    const el4 = left3Ref.current;

    tl.fromTo(
          el4,
          { y: 5, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, delay: 0.6}
      )

  }, []);

  return (
    <>
      <div className="copyright" style={{width:"98vw", color:"black", marginTop:"-1vw" }}>
        <div className='copyr2' style={{width:"90%", textAlign:"center", color:"black", borderTop: "0.1vw solid black" }} ref={left3Ref}>
        Copyright 2023 TradeCops.com  all rights reserved
        </div>
      </div>
    </>
  )
}

export default Copyright
