"use strict";
import React, { Component } from "react";
import SinglePlayerGameplay from "./SinglePlayerGameplay";


export default class SinglePlayer extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
			<SinglePlayerGameplay />
			</div>
		);
	}
}
