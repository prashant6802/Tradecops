import React, { useState, useEffect } from 'react';
import TradeCops from "./images/TradeCops.png"
import Text from './Text';

const Slider = () => {


  const slides = [
    { title: 'Best Financial Solution Ever', image: TradeCops, text: '' },
    { title: 'Slide 2', image: TradeCops },
    { title: 'Slide 3', image: TradeCops },
    { title: 'Slide 4', image: TradeCops },
  ];

  const plides = [
    { title: 'Slide 1', image: TradeCops },
    { title: 'Slide 2', image: TradeCops },
    { title: 'Slide 3', image: TradeCops },
    { title: 'Slide 4', image: TradeCops },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };

  }, [currentIndex, slides.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
          >
            <div className="lf3head" /*ref={rightRef}*/>
                <div className="paraheadtexttest">
                {slide.title}
                </div>
            </div>
            <div className="lf3textun" /*ref={right1Ref}*/>
                <Text text="TradeCops has been a game-changer for my trading journey. Their innovative platform and cutting-edge technology have transformed the way I trade. The copy trading solutions and exceptional customer service have significantly boosted my profitability. I highly recommend TradeCops for traders seeking a secure and profitable trading environment." />
            </div>
          </div>
        ))}
        {/* <div className="slider-index">Slide {currentIndex + 1}</div> */}
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


      <div className="slider">
        {plides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
          >
            <div className="lf3textunhh" style={{marginTop:"1vw"}} /*ref={right3Ref}*/>
                <Text text="Ramesh Thakur" fwt="600"/>
            </div>
          </div>
        ))}
       </div>


    </div>
  );
};

export default Slider;
