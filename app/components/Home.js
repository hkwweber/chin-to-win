import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
	return (
		<div>
			<img src='https://i.imgur.com/XmDSh0z.jpg' />
			<h1>CHIN TO WIN</h1>
			<Link to='/single-player-instructions'>
			<button>SINGLE PLAYER GAME</button></Link>
			<Link to='/multi-player'><button>MULTIPLAYER GAME</button></Link>

		</div>
	);
};

export default Home;
