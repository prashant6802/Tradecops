import React from "react";
import Largeheading from "./Largeheading";

const Largecenthead = (props) => {

  return (
    <div
      className="tachead"
      style={{
        width: "90vw",
        textAlign: "center",
        paddingLeft: "4vw",
        paddingRight: "4vw",
      }}
    >
      <Largeheading bot={props.heading} />
    </div>
  );
};

export default Largecenthead;
