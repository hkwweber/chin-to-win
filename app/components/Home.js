import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
	return (
		<div>
			<h1>CHIN TO WIN</h1>
			<Link to='/single-player'>
			<button>SINGLE PLAYER GAME</button></Link>
			<Link to='/multi-player'><button>MULTIPLAYER GAME</button></Link>

		</div>
	);
};

export default Home;
