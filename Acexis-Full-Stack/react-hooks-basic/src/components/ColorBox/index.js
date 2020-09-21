import React, { useState } from "react";
//import PropTypes from "prop-types";
import "./style.css";

ColorBox.propTypes = {};

function ColorBox() {
  //console.log("Render Colox Box");
  const COLOR = ["red", "blue", "black", "white", "pink", "grey"];
  const [color, setColor] = useState(() => {
    //console.log("Once");
    const initState = localStorage.getItem("color");
    return initState || "red";
  });
  const onSetColorBox = () => {
    const getColor = COLOR[Math.round(Math.random() * (COLOR.length - 1))];
    setColor(getColor);
    localStorage.setItem("color", getColor);
  };
  return (
    <div
      className="box"
      style={{
        backgroundColor: `${color}`,
      }}
      onClick={() => onSetColorBox()}
    ></div>
  );
}

export default ColorBox;
