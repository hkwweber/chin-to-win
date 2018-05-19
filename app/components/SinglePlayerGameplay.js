"use strict";
import React, { Component } from "react";
import GuessResult from "./GuessResult";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllCelebsFromServer, setNextCeleb } from "../store";

class SinglePlayerGameplay extends Component {
	constructor() {
		super();
		this.state = {
			currentGuess: "",
			hasGuessed: false,
			correct: false
		};
		this.onGuessEdit = this.onGuessEdit.bind(this);
		this.onGuessSubmit = this.onGuessSubmit.bind(this);
	}

	componentDidMount() {
		this.props.loadInitialData();
	}

	componentWillReceiveProps(nextProps) {
		console.log('next props!!!', nextProps)
		if (this.props.currentCeleb.id !== nextProps.currentCeleb.id) {
			this.setState({
				currentGuess: "",
				hasGuessed: false,
				correct: false
			});
		}
	}

	onGuessEdit(e) {
		const currentGuess = e.target.value;
		this.setState({ currentGuess });
	}

	onGuessSubmit(e) {
		e.preventDefault();
		let isCorrect =
			this.state.currentGuess.toLowerCase() ===
			this.props.currentCeleb.name.toLowerCase();
		this.setState({ correct: isCorrect, hasGuessed: true, currentGuess: "" });
	}

	render() {
		const { currentGuess, hasGuessed, correct } = this.state;
		const { currentCeleb } = this.props;
		console.log("current!!!", currentCeleb);
		console.log("rest of them: ", this.props.allCelebs);
		return (
			<div className="container-column">
				<img src={currentCeleb.chinCropPhoto} />
				<form className="container-column" onSubmit={this.onGuessSubmit}>
					<input
						autoFocus
						type="text"
						name="celeb-guess"
						value={currentGuess}
						onChange={this.onGuessEdit}
					/>
					<button type="submit">GUESS</button>
				</form>
				<GuessResult
					hasGuessed={hasGuessed}
					correct={correct}
					currentCeleb={currentCeleb}
				/>
			</div>
		);
	}
}

const mapState = state => {
	return {
		allCelebs: state.celebs.allCelebs,
		currentCeleb: state.celebs.currentCeleb
	};
};

const mapDispatch = dispatch => {
	return {
		loadInitialData() {
			dispatch(fetchAllCelebsFromServer());
		}
	};
};

export default withRouter(connect(mapState, mapDispatch)(SinglePlayerGameplay));
