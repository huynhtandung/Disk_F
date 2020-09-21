import React, { useState, useRef } from "react";
//import PropTypes from "prop-types";

Search.propTypes = {};

function Search(props) {
  //console.log("Render filter");
  const [term, setTerm] = useState("");
  const { onFilter } = props;
  const searchRef = useRef(null);

  const onChangeValue = (e) => {
    const value = e.target.value;
    setTerm(value);
    if (searchRef.current) clearTimeout(searchRef.current);
    searchRef.current = setTimeout(() => {
      onFilter(value);
    }, 500);
  };
  return (
    <div>
      <form>
        <input type="text" onChange={onChangeValue} value={term} />
      </form>
    </div>
  );
}

export default Search;
