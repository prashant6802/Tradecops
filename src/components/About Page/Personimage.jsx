import React from 'react'
import greena from "./images/greenn.png";
import yellowa from "./images/yelloww.png";
import gsap from "gsap";
// import VanillaTilt from 'vanilla-tilt';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Figure = (props) => {

//   const tiltRef = useRef(null);

//   useEffect(() => {

//     VanillaTilt.init(tiltRef.current);

//   }, []);

  return (

    <div className='figure' style={{width: props.width, height: props.height}}>
        <img className='clouda' src={yellowa} alt=""/* src="https://i.imgur.com/CZv2Gcq.png" width={"100%"} height={"100%"} style={{gridRow: props.yr, gridColumn: props.yc}}*/ />
        <img className='cloudb' src={greena} alt=""/* src="https://i.imgur.com/6i7Asxe.png" width={"100%"} height={"100%"} style={{gridRow: props.gr, gridColumn: props.gc}}*/ />
        <img className='centimage' src={props.cenimage} alt="" width={"100%"} height={"100%"} style={{gridRow: props.ir, gridColumn: props.ic}} /*ref={tiltRef}*/ />
        <div className='blackimage' style={{gridRow: props.blackir, gridColumn: props.blackic}} /*ref={tiltRef}*/> </div>
    </div>
  )

}

export default Figure
