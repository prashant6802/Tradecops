import React from "react";
import Figure from "../Basic Components/Figure";
import Paragr from "../Basic Components/Paragr.jsx";
import Text from "../Basic Components/Text";
import purse from "./images/purse.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contactsdetails = () => {

  const left1Ref = useRef(null);
  const left2Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lf1text",
      },
    });

    const el2 = left1Ref.current;
    const el3 = left2Ref.current;

    tl.fromTo(
          el2,
          { x: 35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, delay: 1}
      )
      .fromTo(
          el3,
          { x: -35, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5}
      )

  }, []);

  return (
    <div className="landfeat1">
      <div className="lf1fig" ref={left2Ref}>
        <Figure
          width="100%"
          height="100%"
          cenimage={purse}
          ir="15/95"
          ic="20/101"
          gr="1/80"
          gc="5/90"
          yr="1/40"
          yc="1/80"
        />
      </div>

      <div
        className="lf1text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        ref={left1Ref}
      >
        <div
          className="lf1ph"
          style={{ display: "flex", justifyContent: "center" }}
          ref={left1Ref}
        >
          <Paragr
            image="https://i.imgur.com/5fzMln4.png"
            heading="Our Email Addresses"
          />
        </div>
        <div className="lf1pt" >
          <Text text="🔹 support@tradecops.com" />
        </div>
        <div className="lf1pt">
          <Text text="🔹 info@tradecops.com" />
        </div>
        <div
          className="lf1ph"
          style={{
            marginTop: "7vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paragr
            image="https://i.imgur.com/TiFCANO.png"
            heading="Our Location"
          />
        </div>
        <div className="lf1pt">
          <Text text="Suite No B-10, H15, H Block, Sector 63," />
        </div>
        <div className="lf1pt">
          <Text text="Noida, Uttar Pradesh, 201301, India" />
        </div>
        <div
          className="lf1ph"
          style={{
            marginTop: "7vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paragr
            image="https://i.imgur.com/nTIixdK.png"
            heading="Office Hours"
          />
        </div>
        <div className="lf1pt">
          <Text text="Monday - Saturday: 9:00 am to 7:00 pm" />
        </div>
        <div className="lf1pt">
          <Text text="Sunday: Closed" />
        </div>
      </div>

      {/* <div className='colors'>
            <img className='cloud1' src="https://i.imgur.com/CZv2Gcq.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "30/70", gridColumn: "11/101"}}/>
            <img className='cloud2' src="https://i.imgur.com/6i7Asxe.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "20/60", gridColumn: "11/101"}}/>
            <img className='cloud1' src="https://i.imgur.com/CZv2Gcq.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "30/70", gridColumn: "51/101"}}/>
            <img className='cloud2' src="https://i.imgur.com/6i7Asxe.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "20/60", gridColumn: "51/101"}}/>
            <img className='cloud1' src="https://i.imgur.com/CZv2Gcq.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "30/70", gridColumn: "71/101"}}/>
            <img className='cloud2' src="https://i.imgur.com/6i7Asxe.png" alt="" width={"100%"} height={"100%"} style={{gridRow: "20/60", gridColumn: "71/101"}}/>             
        </div>  */}
    </div>
  );
};

export default Contactsdetails;
