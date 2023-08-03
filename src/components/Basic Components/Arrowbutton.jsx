import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const Arrowbutton = (props) => {
  return (
    <a href="/" className="arrowbutton">
      <div className="arrowbuttontext" >
        {props.text}
      </div>
      <div className="arrowbuttonimage">
      <HiArrowLongRight style={{backgroundImage:"none", backgroundColor:"black", marginLeft:"10%"}}/>
      </div>
    </a>
  );
};

export default Arrowbutton;
