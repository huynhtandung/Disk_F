import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext, AgeContext } from "./index";

NestComponent.propTypes = {};

function NestComponent(props) {
  const age = useContext(AgeContext);
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <div>
            Component is using context: User is {user}, age {age}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default NestComponent;
