import React, { useState, useEffect, useContext } from "react";
import Hoc from './HocComponent/index'

function Lession04 (props) {
  return(
    <div>
      <div>The new prop is {props.newProp}</div>
      <div>The old prop is {props.oldProp}</div>
    </div>
  )
}

export default Hoc(Lession04);
