import React from "react";
//import PropTypes from 'prop-types';
import useClock from "./ClockHook";

Clock.propTypes = {};

function Clock(props) {
  const time = useClock();
  return <div>{time}</div>;
}

export default Clock;
