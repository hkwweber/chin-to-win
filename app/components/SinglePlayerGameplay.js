"use strict";
import React, { Component } from "react";

export default class SinglePlayerGameplay extends Component {
	constructor() {
		super();
		this.state = {
			currentCeleb: {
				name: "Daniel Day-Lewis",
				fullPhoto: "https://i.imgur.com/B5xtqoF.jpg",
				chinCropPhoto: "https://i.imgur.com/O9D0llf.jpg"
			},
			currentGuess: "",
			hasGuessed: false,
			correct: false
		};
		this.onGuessEdit = this.onGuessEdit.bind(this);
		this.onGuessSubmit = this.onGuessSubmit.bind(this);
	}

	onGuessEdit(e) {
		const currentGuess = e.target.value;
		this.setState({currentGuess});
	}

	onGuessSubmit(e) {
		e.preventDefault();
		let isCorrect = this.state.currentGuess.toLowerCase() === this.state.currentCeleb.name.toLowerCase();
		this.setState({correct: isCorrect, hasGuessed: true, currentGuess: ""});

	}

	render() {
		const {currentGuess, hasGuessed, correct, currentCeleb} = this.state;
		let result = null;
		if (hasGuessed && correct) result = `Well done! ${currentCeleb.name} it is.`;
		else if (hasGuessed) result = "WRONG ANSWER";
		return (
			<div className="container-column">
				<img src={this.state.currentCeleb.chinCropPhoto} />
				<form className="container-column" onSubmit={this.onGuessSubmit}>
				<input autoFocus type="text" name="celeb-guess" value={currentGuess} onChange={this.onGuessEdit}/>
				<button type="submit" >GUESS</button>
				</form>
				<div>{result}</div>
			</div>
		);
	}
}
