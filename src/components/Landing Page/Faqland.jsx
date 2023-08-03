import React from "react";
import Paragrtitle from "../Basic Components/Paragrtitle";
import Largeheading from "../Basic Components/Largeheading";
import Faqtexts from "./Faqtexts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Faqland = () => {
  const leftRef = useRef(null);
  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".faqblh",
      },
    });

    const el2 = rightRef.current;
    const el = leftRef.current;
    const el3 = left1Ref.current;
    const el4 = left2Ref.current;
    const el5 = left3Ref.current;

    tl.fromTo(
      el2,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
      el,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: -1 }
    ).fromTo(
      el3,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1}
    ).fromTo(
      el4,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1}
    ).fromTo(
      el5,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1}
    )
  }, []);

  return (
    <>
      {/* FAQ */}

      <div className="faqgh" ref={rightRef}>
        <Paragrtitle top="FAQ" />
      </div>

      {/* Frequently Asked Questions and star */}

      <div className="faqblh">
        <div className="faqblhp1" ref={leftRef}>
          <Largeheading bot="Frequently Asked Questions" />
        </div>
        <div className="faqblhp2">
          <img
            src="https://i.imgur.com/cHW9MDF.png"
            alt=""
            width={"10%"}
            height={"30%"}
          />
        </div>
      </div>

      {/* Columns */}

      <div className="faqt" ref={left1Ref}>
        <Faqtexts
          bc1="#6ed59d"
          c1="black"
          bc2="black"
          c2="white"
          headone="What Is TradeCops?"
          textone="TradeCops Is A Trading Platform That Provides Traders With A Secure And Profitable Environment To Trade Stocks, Forex, Cryptocurrencies And More"
          headtwo="How Does Copy Trading Work?"
          texttwo="Copy Trading Allows You To Replicate The Trades Of Experienced And Successful Traders. With TradeCops, You Can Automatically Copy The Trades"
        />
      </div>
      <div className="faqtprt2" ref={left2Ref}>
        <Faqtexts
          bc2="#6ed59d"
          c2="black"
          bc1="black"
          c1="white"
          headone="Are My Funds And Personal Information Safe With TradeCops ?"
          textone="Yes, at TradeCops, the security of your funds and personal information is our top priority."
          headtwo="Can I become a franchise owner with TradeCops?"
          texttwo="Yes, we offer a franchise business model for individuals who are interested in expanding wealth."
        />
      </div>
      <div className="faqt" ref={left3Ref}>
        <Faqtexts
          bc1="#6ed69e"
          c1="black"
          bc2="black"
          c2="white"
          headone="What is a Pamm Account?"
          textone="A Pamm Account is an investment feature offered by TradeCops where experienced money managers trade on behalf of investors."
          headtwo="How can I contact TradeCops for support?"
          texttwo="If you have any questions or need support, you can reach out to our dedicated support team."
        />
      </div>
    </>
  );
};

export default Faqland;
