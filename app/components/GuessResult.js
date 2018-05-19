"use strict";
import React from "react";
import NextButton from "./NextButton";

const GuessResult = props => {
	const { hasGuessed, correct, currentCeleb } = props;
	if (!hasGuessed) return null;
	let outcome = correct
		? `Well done! ${currentCeleb.name} it is.`
		: `WRONG ANSWER`;
	return (
		<div className="container-column">
			{outcome}
			<NextButton />
		</div>
	);
};

export default GuessResult;
