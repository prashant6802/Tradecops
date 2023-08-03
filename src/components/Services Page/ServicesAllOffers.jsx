import React from "react";
import ServicesOffer from "./ServicesOffer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import machine from "./images/machine.png";
import mandw from "./images/mandw.png";
import layers from "./images/layers.png";
import SpaceComp from "../Basic Components/SpaceComp";
gsap.registerPlugin(ScrollTrigger);

const ServicesAllOffers = () => {

  const left1Ref = useRef(null);
  const rightRef = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#serhead",
      },
    });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".landfeat2",
        },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#seroffer",
        },
      });

    const el2 = left1Ref.current;
    const el = rightRef.current;
    const el22 = right1Ref.current;
    const el3 = right2Ref.current;

    tl.fromTo(
      el2,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.5}
    )
    .fromTo(
        el,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.8}
      )
      tl2.fromTo(
        el22,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
      tl3.fromTo(
        el3,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )


  }, []);

  return (
    <>
      <div id = "serhead"
        style={{
          textAlign: "center",
          fontSize: "6vw",
          fontWeight: "bold",
          marginTop: "15vh",
          marginBottom: "3vw",
        }}
        ref={left1Ref}
      >
        Explore Our Services Below
      </div>

      <div className="servoffer" ref={rightRef}>
        <ServicesOffer
          onehead="Copy Trading Solutions"
          twohead="Signal Generation Algorithms"
          onetext="Harness the power of successful traders with our Copy Trading Solutions. By automatically replicating the trades of experienced traders, you can benefit from their expertise, improve your trading performance, and potentially increase your profits. Our advanced copy trading platform ensures seamless trade execution and real-time synchronization."
          twotext="Take advantage of our state-of-the-art signal generation algorithms. Our advanced algorithms analyze market data, identify trading opportunities, and generate accurate signals to guide your trading decisions. Whether you are a beginner or an experienced trader, our signals can help you navigate the markets with confidence and precision."
          oneimg="https://i.imgur.com/5fzMln4.png"
          twoimg="https://i.imgur.com/nTIixdK.png"
          img={mandw}
        />
      </div>

      <SpaceComp height="5vw" />

      <div className="landfeat2" ref={right1Ref}>
        <ServicesOffer
          onehead="Pamm Accounts"
          twohead="High-Quality Customer Service"
          onetext="Invest with confidence through our Pamm Accounts. Our experienced money managers will handle your investments, leveraging their expertise to trade on your behalf. Benefit from their strategic approach, risk management techniques, and track record of success. Our Pamm Accounts are designed to optimize returns while minimizing risk, allowing you to passively grow your wealth."
          twotext="We pride ourselves on delivering exceptional customer service. Our dedicated support team is available to assist you with any inquiries, technical issues, or account-related matters. Whether you have a question about our services or need assistance with your trading account, we are here to provide prompt and reliable support."
          twoimg="https://i.imgur.com/5fzMln4.png"
          oneimg="https://i.imgur.com/nTIixdK.png"
          img={machine}
        />
      </div>

      <SpaceComp height="5vw" />

      <div className="servoffer" id="seroffer" ref={right2Ref}>
        <ServicesOffer
          onehead="Online Media Management:"
          twohead="Trading Education and Resources"
          onetext="Enhance your online presence and reach a wider audience with our Online Media Management services. Our team of experts will create and manage engaging content across various online platforms, ensuring that your trading activities are effectively promoted and your brand receives maximum visibility. Let us help you establish a strong online presence and attract potential clients."
          twotext="We believe in empowering traders with knowledge and resources. Access our educational materials, webinars, and market analysis reports to expand your understanding of the markets, trading strategies, and risk management techniques. Stay informed and make informed trading decisions with the help of our comprehensive educational resources."
          oneimg="https://i.imgur.com/5fzMln4.png"
          twoimg="https://i.imgur.com/nTIixdK.png"
          img={layers}
        />
      </div>

      <SpaceComp height="5vw" />
    </>
  );
};

export default ServicesAllOffers;
