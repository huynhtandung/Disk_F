import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actionAddList } from "./../actions/index";

AddList.propTypes = {};

function AddList(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAddList(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleOnChange} value={value} />
      <button type="submit">Add List</button>
    </form>
  );
}

export default AddList;
