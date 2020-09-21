import React from "react";
import PropTypes from "prop-types";

ReactMemo.propTypes = {};

function ReactMemo(props) {
  console.log("This component is using react.memo");
  return <div>React Memo</div>;
}

export default React.memo(ReactMemo);
