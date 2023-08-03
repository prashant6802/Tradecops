import React from 'react'
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Faqtexts = (props) => {

  const tiltRef = useRef(null);
  const tiltRef2 = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current);
    VanillaTilt.init(tiltRef2.current);
  }, []);

  return (
    <>
        
        <div className='faqt1' style={{backgroundColor:props.bc1, color:props.c1}} ref={tiltRef}>
          <div className='faqth' style={{fontWeight:"600", backgroundColor: props.bc1, backgroundImage: "none"}}>{props.headone}</div>
          <div className='faqtt' style={{backgroundColor: props.bc1, backgroundImage: "none"}}>{props.textone}</div>
        </div>

        <div className='faqt1' style={{backgroundColor:props.bc2, color:props.c2}} ref={tiltRef2}>
          <div className='faqth' style={{fontWeight:"600", backgroundColor: props.bc2, backgroundImage: "none"}}>{props.headtwo}</div>
          <div className='faqtt' style={{backgroundColor: props.bc2, backgroundImage: "none"}}>{props.texttwo}</div>
        </div>

    </>
  )
}

export default Faqtexts
