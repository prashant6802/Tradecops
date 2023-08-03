import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Elevate = () => {

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);
  const right3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#elev",
      },
    });

    const el = leftRef.current;
    const el2 = rightRef.current;
    const el3 = right1Ref.current;
    const el4 = right2Ref.current;
    const el5 = right3Ref.current;

    tl.fromTo(el2, { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 })
      .fromTo(el3, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5})
      .fromTo(el4, { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5})
      .fromTo(el5, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5})
      .fromTo(el, { x: 25, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 });
  }, []);


  return (
    <div style={{width:"98vw", height:"40vw", display:"flex", alignItems:"center", justifyContent:"space-around"}}>

        <div style={{width:"60%"}} id="elev">

            <div style={{display:"flex", justifyContent:"space-between"}}>

                <div style={{width:"45%"}} ref={rightRef}>
                    <div style={{display: "flex", alignItems:"center"}}><span style={{fontSize:"3.5vw", marginRight:"1vw"}}>🍻  </span> <span style={{fontSize:"1.8vw", fontWeight:"600"}}>Copy Trading</span></div>
                    <div style={{display: "flex", alignItems:"center", fontSize:"1.7vw", marginTop:"2vw"}}>By automatically replicating the trades of experienced traders, you can benefit from their expertise.</div>
                </div>
                <div style={{width:"45%"}} ref={right2Ref}>
                    <div style={{display: "flex", alignItems:"center"}}> <span style={{fontSize:"3.5vw", marginRight:"1vw"}}>🧭  </span> <span style={{fontSize:"1.8vw", fontWeight:"600"}}>Signal Gen Algorithms</span></div>
                    <div style={{display: "flex", alignItems:"center", fontSize:"1.7vw", marginTop:"2vw"}}>identify trading opportunities, and generate accurate signals to guide your trading decisions.</div>
                </div>

            </div>

            <div style={{display:"flex", justifyContent:"space-between", marginTop:"9vw"}}>

                <div style={{width:"45%"}} ref={right1Ref}>
                    <div style={{display: "flex", alignItems:"center"}}> <span style={{fontSize:"3.5vw", marginRight:"1vw"}}>🧬  </span> <span style={{fontSize:"1.8vw", fontWeight:"600"}}>Pamm Accounts</span></div>
                    <div style={{display: "flex", alignItems:"center", fontSize:"1.7vw", marginTop:"2vw"}}>With Our Pamm Accounts optimize returns while minimizing risk, allowing you to passively grow your wealth.</div>
                </div>
                <div style={{width:"45%"}} ref={right3Ref}>
                    <div style={{display: "flex", alignItems:"center"}}><span style={{fontSize:"3.5vw", marginRight:"1vw"}}>🍂  </span> <span style={{fontSize:"1.8vw", fontWeight:"600"}}>Customer Service</span></div>
                    <div style={{display: "flex", alignItems:"center", fontSize:"1.7vw", marginTop:"2vw"}}>Our dedicated support team is available to assist you with any inquiries, technical issues, or account-related matters.</div>
                </div>

            </div>

        </div>

        <div style={{width:"20%"}} ref={leftRef}>
            
            <div style={{fontSize:"3vw", fontWeight:"600"}}>Elevate your experience with Trade<span style={{color:"#28BB6B", fontWeight:"600"}}>Cops</span></div>
            <div style={{fontSize:"2vw", marginTop:"4vw"}}>Immerse in realm of trading and make money with us.</div>

        </div>
      
    </div>
  )
}

export default Elevate
