import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { actionAddList } from "../actions/index";

TestPage.propTypes = {};

function TestPage(props) {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actionAddList(2));
  };
  return (
    <div>
      <div>{data.a}</div>
      <br />
      <button onClick={() => handleClick()}>Test</button>
    </div>
  );
}

export default TestPage;
