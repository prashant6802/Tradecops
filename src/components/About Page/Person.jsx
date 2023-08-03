import React from "react";
import Text from "../Basic Components/Text";
import Personimage from "./Personimage";
import Stardir from "../Basic Components/Stardir";

const Person = (props) => {
  
  return (
    <>
      <div className="personfig">
        <Personimage
          width="100%"
          height="100%"
          cenimage={props.img}
          ir="25/77"
          ic="25/77"
          blackir="24/78"
          blackic="24/78"
        />
      </div>

      <div className="lf3text">
        <div className="personhead1">{props.name}</div>
        <div className="personhead">{props.position}</div>
        <div className="lf3textun">
          <Text text={props.aboutperson} />
        </div>
        <Stardir side="right" />
      </div>
    </>
  );
};

export default Person;
