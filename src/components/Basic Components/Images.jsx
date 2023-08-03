import React from 'react'
import gsap from 'gsap';
import yellow from "./images/yelloww.png";
import green from "./images/greenn.png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";
gsap.registerPlugin(ScrollTrigger);

const Images = (props) => {

  const leftRef = useRef(null);

  useEffect(()=>{

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".blackbox",
      }
    });

    const el = leftRef.current;

    tl.fromTo(el, {y: 70, x:0, opacity: 0}, {y: 0, x: 0, opacity: 1, duration: 1})
      .fromTo(".blackboxtext", {opacity: 0}, {opacity: 1, duration: 0.6, delay: 0.2})
      .fromTo(".blackboxbutton", {opacity: 0}, {opacity: 1, duration: 0.6, delay: -0.1})
      .fromTo(".image3", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".image4", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".image5", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".image6", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".image7", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".image8", {opacity: 0}, {opacity: 1, duration: 0.15})
      .fromTo(".star1", {opacity: 0}, {opacity: 1, duration: 0.1, delay: 0.1})
      .fromTo(".star2", {opacity: 0}, {opacity: 1, duration: 0.1})
      .fromTo(".image1", {opacity: 0}, {opacity: 1, duration: 0.3})
      .fromTo(".image2", {opacity: 0}, {opacity: 1, duration: 0.3})
      .fromTo(".star3", {opacity: 0}, {opacity: 1, duration: 0.2, delay: 0.2})
      .fromTo(".star4", {opacity: 0}, {opacity: 1, duration: 0.2, delay: 0.2})

  }, [])

  return (
    <div className='total'>
        <img className='image1' src={yellow} alt="" width={"100%"} height={"100%"}/>
        <img className='image2' src={green} alt="" width={"100%"} height={"100%"}/>
        <img className='star3' src="https://i.imgur.com/cHW9MDF.png" alt="" width={"100%"} height={"100%"} />
        <img className='star4' src="https://i.imgur.com/cHW9MDF.png" alt="" width={"100%"} height={"100%"} />
        <div className='blackbox' ref={leftRef}>
            <img className='image3' src="https://i.imgur.com/c9a4oCh.png" alt="" width={"100%"} height={"100%"} />
            <img className='image4' src="https://i.imgur.com/esucl6F.png" alt="" width={"100%"} height={"100%"} />
            <img className='image5' src="https://i.imgur.com/aYFVeZT.png" alt="" width={"100%"} height={"100%"} />
            <img className='image6' src="https://i.imgur.com/9PU93WF.png" alt="" width={"100%"} height={"100%"} />
            <img className='image7' src="https://i.imgur.com/Oji6F5F.png" alt="" width={"100%"} height={"100%"} />
            <img className='image8' src="https://i.imgur.com/v5ep3vQ.png" alt="" width={"100%"} height={"100%"} />
            <img className='star1' src="https://i.imgur.com/bPxePRt.png" alt="" width={"100%"} height={"100%"} />
            <img className='star2' src="https://i.imgur.com/bPxePRt.png" alt="" width={"100%"} height={"100%"} />
            <div className='blackboxtext' width={"100%"} height={"100%"}>{props.head}</div>
            <button className='blackboxbutton' width={"100%"} height={"100%"}>{props.but}</button>
        </div>
    </div>
  )
}

export default Images
