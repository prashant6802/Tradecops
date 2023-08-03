import React from 'react'
import greenn from "./images/greenn.png"
import yelloww from "./images/yelloww.png"
import ring from "./images/ring.svg"
import gsap from "gsap";
import VanillaTilt from 'vanilla-tilt';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Figure = (props) => {

  const tiltRef = useRef(null);

  useEffect(() => {

    VanillaTilt.init(tiltRef.current);

  }, []);

  return (

    <div className='figure' style={{width: props.width, height: props.height}}>
        <img className='r1' src={ring} alt="" width={"100%"} height={"100%"} />
        <img className='r2' src={ring} alt="" width={"100%"} height={"100%"} />
        <img className='r3' src={ring} alt="" width={"100%"} height={"100%"} />
        <img className='cloud1' src={yelloww} alt=""/* src="https://i.imgur.com/CZv2Gcq.png" width={"100%"} height={"100%"} style={{gridRow: props.yr, gridColumn: props.yc}}*/ />
        <img className='cloud2' src={greenn} alt=""/* src="https://i.imgur.com/6i7Asxe.png" width={"100%"} height={"100%"} style={{gridRow: props.gr, gridColumn: props.gc}}*/ />
        <img className='cenimage' src={props.cenimage} alt="" width={"100%"} height={"100%"} style={{gridRow: props.ir, gridColumn: props.ic}} ref={tiltRef}/>
    </div>
  )

}

export default Figure
