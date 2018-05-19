"use strict";
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {setNextCeleb} from "../store";

const NextButton = props => {
	const {allCelebs, selectNextCeleb} = props;
	const handleClick = () => {
		const indexToChoose = Math.floor(Math.random()*allCelebs.length);
		console.log('idx to choose: ',indexToChoose);
		selectNextCeleb(indexToChoose);
	}

	return <button onClick={handleClick}>NEXT</button>;
};


const mapState = state => {
	return {
		allCelebs: state.celebs.allCelebs
	};
};

const mapDispatch = dispatch => {
	return {
		selectNextCeleb(index) {
			dispatch(setNextCeleb(index));
		}
	};
};

export default withRouter(connect(mapState, mapDispatch)(NextButton));
