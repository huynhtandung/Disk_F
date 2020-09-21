import React from "react";
import PropTypes from "prop-types";
import NestComponent from "./NestComponent";

Context.propTypes = {};

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

function Context(props) {
  return (
    <UserContext.Provider value={"dhuynh"}>
      <AgeContext.Provider value={23}>
        <NestComponent />
      </AgeContext.Provider>
    </UserContext.Provider>
  );
}

export default Context;
