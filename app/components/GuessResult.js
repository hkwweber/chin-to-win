"use strict";
import React from "react";

const GuessResult = props => {
	const { hasGuessed, correct, currentCeleb } = props;
	if (!hasGuessed) return null;
	let outcome = correct ? `Well done! ${currentCeleb.name} it is.` : `WRONG ANSWER`;
	return (
	        <div className="container-column">
	        {outcome}
	        <button>NEXT</button>
	        </div>
	        );
};

export default GuessResult;
