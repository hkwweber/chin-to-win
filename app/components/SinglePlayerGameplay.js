"use strict";
import React, { Component } from "react";

export default class SinglePlayerGameplay extends Component {
	constructor() {
		super();
		this.state = {
			name: "Daniel Day-Lewis",
			fullPhoto: "https://i.imgur.com/B5xtqoF.jpg",
			chinCropPhoto: "https://i.imgur.com/O9D0llf.jpg"
		};
	}

	render() {
		return <div>inside single player gameplay babay</div>;
	}
}
