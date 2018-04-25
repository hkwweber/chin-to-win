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
		return (
			<div>
				<img src={this.state.chinCropPhoto} />
				<input type="text" name="celeb-guess" />
				<button>GUESS</button>
			</div>
		);
	}
}
