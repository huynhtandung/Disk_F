import React, { useState } from "react";
//import PropTypes from "prop-types";

AddTodo.propTypes = {};

function AddTodo(props) {
  //console.log("Render Add todo");
  const [value, setValue] = useState("");
  const onAddTodo = (e) => {
    e.preventDefault();
    setValue("");
    props.title({
      title: value,
    });
  };
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onAddTodo}>
        <input type="text" onChange={onChangeValue} value={value} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
