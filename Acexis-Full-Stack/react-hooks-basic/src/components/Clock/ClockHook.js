import { useState, useEffect } from "react";
//import PropTypes from "prop-types";

ClockHook.propTypes = {};

const formatTime = (now) => {
  const hour = `0${now.getHours()}`.slice(-2);
  const minute = `0${now.getMinutes()}`.slice(-2);
  const second = `0${now.getSeconds()}`.slice(-2);
  return `${hour}:${minute}:${second}`;
};

function ClockHook(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(formatTime(now));
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return time;
}

export default ClockHook;
