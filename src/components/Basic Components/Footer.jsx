import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaLinkedin, FaYoutube } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    const left1Ref = useRef(null);
    const rightRef = useRef(null);
    const right1Ref = useRef(null);
    const right2Ref = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#footty",
        },
      });
  
      const el2 = left1Ref.current;
      const el = rightRef.current;
      const el22 = right1Ref.current;
      const el3 = right2Ref.current;
  
      tl.fromTo(
            el2,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, delay: 0.5}
        )
        .fromTo(
            el,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, delay: -0.1}
        )
        .fromTo(
            el22,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, delay: -0.1}
        )
        .fromTo(
            el3,
            { x: -25, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, delay: -0.1}
        )
  
  
    }, []);

  return (
    <div className='footm' style={{width:"80%",display:"flex"}}>

        <div className='foot1' ref={left1Ref}>
            <div className='foot1h'>
            <span style={{color:"black", fontWeight:"700", fontFamily:'Clash Display,sans-serif'}}>Trade</span><span style={{color:"#40B074", fontWeight:"700", fontFamily:'Clash Display,sans-serif'}}>Cops</span>
            </div>
            <div className='foot1points'>
                <div style={{marginTop:"3vw", display:"flex", alignItems:"center", gap:"1vw", fontWeight:"500", color:"black"}}>
                    <img src="https://i.imgur.com/KiNJHIu.png" alt=""/> support@tradecops.com
                </div>
                <div style={{marginTop:"2.5vw", display:"flex", alignItems:"center", gap:"1vw", fontWeight:"500", color:"black"}}>
                    <img src="https://i.imgur.com/my5iRg7.png" alt=""/> +01203118877
                </div>
            </div>
            <div className='foot1add'>
                Suite No B-10, H15, H Block, Sector 63, Noida, Uttar Pradesh, 201301
            </div>
            
        </div>





        <div className='foot2' ref={rightRef} id="footty">
            
            <div className='foot2h' >
                Links
            </div>
            <div className='foot2t'>
                <div style={{marginTop:"3vw", color:"black"}}>
                    <a href="/" style={{fontWeight:"500", color:"black"}}>
                        Home
                    </a>
                </div>
                <div style={{marginTop:"2.5vw", color:"black"}}>
                    <a href="/about" style={{fontWeight:"500", color:"black"}}>
                        About Us
                    </a>
                </div>
                <div style={{marginTop:"2.5vw", color:"black"}}>
                    <a href="/services" style={{fontWeight:"500", color:"black"}}>
                        Services
                    </a>
                </div>
                <div style={{marginTop:"2.5vw", color:"black"}}>
                    <a href="/blogs" style={{fontWeight:"500", color:"black"}}>
                        Blogs
                    </a>
                </div>
            </div>

        </div>




        <div className='foot2' ref={right1Ref} >
            
            <div className='foot2h'>
                Legal
            </div>
            <div className='foot2t'>
                <div style={{marginTop:"3vw", color:"black"}}>
                <a href="/terms" style={{fontWeight:"500", color:"black"}}>
                    Terms Of Use
                </a>
                </div>
                <div style={{marginTop:"2.5vw", color:"black"}}>
                <a href="/privacypolicy" style={{fontWeight:"500", color:"black"}}>
                    Privacy Policy
                </a>
                </div>
                <div style={{marginTop:"2.5vw", color:"black"}}>
                <a href="/cookiepolicy" style={{fontWeight:"500", color:"black"}}>
                    Cookie Policy
                </a>
                </div>
            </div>

        </div>





        <div className='foot2' ref={right2Ref}>
            
            <div className='foot4h'>
                Account
            </div>
            <div className='foot4t'>

                <div style={{marginTop:"3vw", textAlign:"right", color:"black"}}>
                <a href="/" style={{textDecoration:"none",  fontWeight:"500", color:"black"}}>
                    Open an Account
                </a>
                </div>

                <div className='foot4links'>
                    <a href="/">
                        <FaFacebook className="foot4imgs"/>
                    </a>
                    <a href="/">
                        <FaTwitter className="foot4imgs"/>
                    </a>
                    <a href="/">
                        <FaInstagram className="foot4imgs"/>
                    </a>
                    <a href="/">
                        <FaTelegram className="foot4imgs"/>
                    </a>
                    <a href="/">
                        <FaLinkedin className="foot4imgs"/>
                    </a>
                    <a href="/">
                        <FaYoutube className="foot4imgs"/>
                    </a>
                </div>

            </div>
            

        </div>





        
    </div>
  )
}

export default Footer
