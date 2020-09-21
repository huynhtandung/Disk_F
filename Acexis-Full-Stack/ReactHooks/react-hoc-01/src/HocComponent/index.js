import React, { useState, useEffect, useContext } from "react";

const withSecretToLife = (WrappedComponent) => {
	function HOC(props) {
		return (
			<WrappedComponent
				{...props}
				newProp={15}
			/>
		);
	}
	return HOC;
};

export default withSecretToLife;
