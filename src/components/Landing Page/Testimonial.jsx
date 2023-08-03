import React from "react";
import Testfig from "../Landing Page/Testfig";
import Text from "../Basic Components/Text";
import paper from "./images/paper.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Paragrtitle from "../Basic Components/Paragrtitle";
// import TradeCops from "../Basic Components/images/TradeCops.png";
import rev1 from "./images/rev1.svg";
import rev2 from "./images/rev2.svg";
import rev3 from "./images/rev3.svg";
import rev4 from "./images/rev4.svg";
import rev5 from "./images/rev5.svg";
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {

  const slides = [
    { title: 'Best Financial Solution Ever', image: rev1, text: 'TradeCops has been a game-changer for my trading journey. Their innovative platform and cutting-edge technology have transformed the way I trade. The copy trading solutions and exceptional customer service have significantly boosted my profitability. I highly recommend TradeCops for traders seeking a secure and profitable trading environment.', person: 'Ramesh Thakur' },
    { title: 'Maza aagya use karke', image: rev2, text: 'lorem Step into our dedicated workspace designed exclusively for traders like you. Say goodbye to distractions and immerse yourself in an environment that encourages focus and productivity.', person: 'Anne Johnson' },
    { title: 'TradeCops is the best', image: rev3, text: 'TradeCops has been a game-changer for my trading journey. Their innovative platform and cutting-edge technology have transformed the way I trade. The copy trading solutions and exceptional customer service have significantly boosted my profitability. I highly recommend TradeCops for traders seeking a secure and profitable trading environment.', person: 'Jack Graham' },
    { title: 'Love the spirit of the people', image: rev4, text: 'Capitalize On Our Favorable Trading Environment And Experience Capital Compounding Like Never Before. Harness The Power Of Copy Trading And Signals Generation To Optimize Your Trading Strategies And Maximize Profits.', person: 'Abhimanyu Singh' },
    { title: 'Amazing support and experience', image: rev5, text: 'lorem Step into our dedicated workspace designed exclusively for traders like you. Say goodbye to distractions and immerse yourself in an environment that encourages focus and productivity.', person: 'Mark Ramsey' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };

  }, [currentIndex, slides.length]);



  const leftRef = useRef(null);
  const left1Ref = useRef(null);
  const rightRef = useRef(null);
  const righttRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landtesthead",
      },
    });

    const el = leftRef.current;
    const elo = righttRef.current;
    const ele = left1Ref.current;
    const el2 = rightRef.current;

    tl.fromTo(elo, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.5 })
      .fromTo(ele, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6})
      .fromTo(el2, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.5 })
      .fromTo(el, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })

  }, []);

  return (
    <>
    <div className="landtesthead" ref={righttRef}>
          <Paragrtitle top="TESTIMONIAL" width="100%" height="100%" />
    </div>
    <div id = "serhead"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "5vh",
          marginBottom: "3vw",
        }}
        ref={left1Ref}
      >
        What our users say about us
      </div>
    <div className="landfeat3">
      <div className="lf3fig" ref={leftRef}>
        <Testfig
          width="100%"
          height="100%"
          cenimage={paper}
          gr="61/101"
          gc="45/101"
          yr="60/101"
          yc="24/101"
        />
      </div>

    <div className="lf3text" ref={rightRef}>


      <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${currentIndex === index ? 'active' : ''}`}
            >

                <div className="lf3head">
                    <div className="paraheadtexttest">
                      {slide.title}
                    </div>
                </div>
                <div className="lf3textun" /*ref={right1Ref}*/>
                  <Text text={slide.text} />
                </div>

            </div>
          ))}
      </div>

      <div className="image-list">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`image ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="slidertext">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${currentIndex === index ? 'active' : ''}`}
                >
                    <div className="lf3textunhh" style={{marginTop:"1vw"}}>
                      <Text text={slide.person} fwt="600"/>
                    </div>
                </div>
              ))}
      </div>


    </div>
    </div>
    </>
  );
};

export default Testimonial;
