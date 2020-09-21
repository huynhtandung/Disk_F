import React from "react";
import "./TodoItem.css";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

function TodoItem(props) {
  /*const getIdDelete = (id) => {
    props.idDelete(id);
    console.log("Click to delete id = ", id);
  };*/
  return (
    <div className="todo" onClick={() => props.idDelete(props.id)}>
      <p>
        STT: {props.id + 1} - title: {props.title}
      </p>
    </div>
  );
}

export default TodoItem;
