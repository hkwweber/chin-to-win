"use strict";
import React, { Component } from "react";
import Home from "./Home";
import SinglePlayer from './SinglePlayer';
import SinglePlayerInstructions from './SinglePlayerInstructions';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {fetchAllCelebsFromServer} from '../store';
import {connect} from 'react-redux';

class Main extends Component {

	componentDidMount() {
		this.props.loadAllCelebs();
	}

	render() {
		return (
			<div className='app-container'>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/single-player" component={SinglePlayer} />
						<Route path="/single-player-instructions" component={SinglePlayerInstructions}/>
					</div>
				</Router>
			</div>
		);
	}
}

const mapState = state => ({})

const mapDispatch = dispatch => {
	return {
		loadAllCelebs () {
			dispatch(fetchAllCelebsFromServer());
		}
	}
}

export default connect(mapState, mapDispatch)(Main);
