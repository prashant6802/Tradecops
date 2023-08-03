import React from 'react'
import gsap from "gsap";
import VanillaTilt from 'vanilla-tilt';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Person1 from "./images/person1.png";
import Person2 from "./images/person2.png";
import Person3 from "./images/person3.png";
import Person4 from "./images/person4.png";
import Person5 from "./images/person5.png";
import Circle from "./images/circle.png";
import Icon from "./images/icon.png";
import greenny from "./images/greenny.png";
import yellowwy from "./images/yellowwy.png";
import ring from "./images/ring.svg"
gsap.registerPlugin(ScrollTrigger);

const Testfig = (props) => {
 
    const tiltRef = useRef(null);
    const tiltRef2 = useRef(null);
    const tiltRef3 = useRef(null);
    const tiltRef4 = useRef(null);
    const tiltRef5 = useRef(null);

    useEffect(() => {
  
      VanillaTilt.init(tiltRef.current);
      VanillaTilt.init(tiltRef2.current);
      VanillaTilt.init(tiltRef3.current);
      VanillaTilt.init(tiltRef4.current);
      VanillaTilt.init(tiltRef5.current);
  
    }, []);
  
    return (
  
        <div className='tesfigure' style={{width: props.width, height: props.height}}>
            <img className='r1' src={ring} alt="" width={"100%"} height={"100%"} />
            <img className='r2' src={ring} alt="" width={"100%"} height={"100%"} />
            <img className='r3' src={ring} alt="" width={"100%"} height={"100%"} />
            <img className='cloud1' src={yellowwy} alt=""/>
            <img className='cloud2' src={greenny} alt=""/>
            <img className='centimage' src={Person1} alt="" width={"100%"} height={"100%"} style={{gridRow:"31/71", gridColumn: "31/71"}} ref={tiltRef}/>
            <img className='centimage' src={Person2} alt="" width={"100%"} height={"100%"} style={{gridRow: "10/30", gridColumn: "10/30"}} ref={tiltRef2}/>
            <img className='centimage' src={Person3} alt="" width={"100%"} height={"100%"} style={{gridRow: "10/30", gridColumn: "71/91"}} ref={tiltRef3}/>
            <img className='centimage' src={Person4} alt="" width={"100%"} height={"100%"} style={{gridRow: "71/91", gridColumn: "71/91"}} ref={tiltRef4}/>
            <img className='centimage' src={Person5} alt="" width={"100%"} height={"100%"} style={{gridRow: "71/91", gridColumn: "10/30"}} ref={tiltRef5}/>
            <img className='centimage' src={Circle} alt="" width={"100%"} height={"100%"} style={{gridRow: "60/74", gridColumn: "60/74"}}/>
            <img className='colonimage' src={Icon} alt="" width={"100%"} height={"100%"} style={{gridRow: "64/70", gridColumn: "64/70"}}/>
        </div>
    )

}

export default Testfig
