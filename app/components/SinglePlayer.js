"use strict";
import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Main extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className='app-container'>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}
