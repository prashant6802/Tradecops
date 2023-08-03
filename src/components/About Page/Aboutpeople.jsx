import React from "react";
import Person from "./Person";
import Stardir from "../Basic Components/Stardir";
import SpaceComp from "../Basic Components/SpaceComp";
import Deepak from "./images/deepak.png"
import Alisha from "./images/alisha.png"
import Amrik from "./images/amrik.png"
import Jay from "./images/jay.png"
import Lovesh from "./images/lovesh.png"
import Sanjay from "./images/sanjay.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Aboutpeople = () => {

  const left1Ref = useRef(null);
  const rightRef = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);
  const right3Ref = useRef(null);
  const right4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#per1",
      },
    });
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#per2",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#per3",
      },
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#per4",
      },
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#per5",
      },
    });
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#per6",
      },
    });

    const el2 = left1Ref.current;
    const el = rightRef.current;
    const el22 = right1Ref.current;
    const el3 = right2Ref.current;
    const el32 = right3Ref.current;
    const el4 = right4Ref.current;

    tl.fromTo(
          el2,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
    tl1.fromTo(
          el,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
    tl2.fromTo(
          el22,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
    tl3.fromTo(
          el3,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
    tl4.fromTo(
          el32,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )
    tl5.fromTo(
          el4,
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.9}
      )


  }, []);

  return (
    <>
      <div className="landfeat2" ref={left1Ref} id="per1">
        <Person
          name="Deepak Thakur"
          position="Founder and Chairman"
          aboutperson="Deepak Thakur, a seasoned Stock Market and currency trader with over 7 years of experience in the Indian and Global Financial Markets, is the driving force behind TradeCops. With a passion for empowering budding stock market traders, he founded Tradecops Private Limited. Deepak's innovative ideas and strategic vision have laid the foundation for India's 1st Trading Environment, providing traders with the necessary support for holistic growth. Under his leadership, TradeCops has established itself as a trusted partner for more than 2000 clients across India."
          oneimg="https://i.imgur.com/5fzMln4.png"
          twoimg="https://i.imgur.com/nTIixdK.png"
          img={Deepak}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="left" width="90vw" />

      <div className="servoffer" ref={rightRef} id="per2">
        <Person
          name="Sanjay Verma"
          position="Director"
          aboutperson="As the Director of TradeCops, Sanjay Verma plays a vital role in shaping the organization's vision and mission. With a keen focus on strategy development and implementation, Sanjay oversees the formulation of strategic objectives and ensures the continuous revision of the organization's strategic plan. By staying informed about market trends, industry developments, and new opportunities, he guides TradeCops towards expansion and growth."
          twoimg="https://i.imgur.com/5fzMln4.png"
          oneimg="https://i.imgur.com/nTIixdK.png"
          img={Sanjay}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="right" width="90vw" />

      <div className="landfeat2" ref={right1Ref} id="per3">
        <Person
          name="Amrik Singh"
          position="Post Marketing and Operations Head"
          aboutperson="Amrik Singh brings a wealth of experience in Marketing and Operations to TradeCops. As the Head of Post Marketing & Operations, Amrik spearheads the research and development of marketing opportunities, implements sales plans, and manages both marketing and sales teams. His strategic leadership and managerial skills drive the company's operational goals and ensure a seamless experience for our clients."
          oneimg="https://i.imgur.com/5fzMln4.png"
          twoimg="https://i.imgur.com/nTIixdK.png"
          img={Amrik}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="left" width="90vw" />

      <div className="servoffer" ref={right2Ref} id="per4">
        <Person
          name="Lovesh Goel"
          position="Senior Research Analyst"
          aboutperson="Lovesh Goel is a highly regarded technical analyst of Indian Stock Exchanges, known for his expertise in inter-market technical analysis. With a passion for simplifying complex concepts, Lovesh has played a significant role in developing TradeCops' educational programs in technical analysis. His extensive experience and knowledge have helped countless traders understand market dynamics and make informed trading decisions."
          twoimg="https://i.imgur.com/5fzMln4.png"
          oneimg="https://i.imgur.com/nTIixdK.png"
          img={Lovesh}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="right" width="90vw" />

      <div className="landfeat2" ref={right3Ref} id="per5">
        <Person
          name="Alisha"
          position="Financial Reporting and Analysis"
          aboutperson="Alisha, our dedicated team member, is responsible for monitoring and analyzing accounting data to produce accurate financial reports and statements. With a keen eye for detail and a strong commitment to financial integrity, Alisha ensures that proper accounting methods, policies, and principles are followed."
          oneimg="https://i.imgur.com/5fzMln4.png"
          twoimg="https://i.imgur.com/nTIixdK.png"
          img={Alisha}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="left" width="90vw" />

      <div className="servoffer" ref={right4Ref} id="per6">
        <Person
          name="Jay Prakash"
          position="Operations Specialist"
          aboutperson="Jay Prakash is a valuable member of our team, specializing in operations and system monitoring. With his strong dedication and attention to detail, Jay ensures the smooth functioning of our systems and operations, even in challenging circumstances."
          twoimg="https://i.imgur.com/5fzMln4.png"
          oneimg="https://i.imgur.com/nTIixdK.png"
          img={Jay}
        />
      </div>
      <SpaceComp height="5vw" />
      <Stardir side="right" width="90vw" />
    </>
  );
};

export default Aboutpeople;
