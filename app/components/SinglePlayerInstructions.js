import React from "react";
import { Link } from "react-router-dom";

const SinglePlayerInstructions = props => {
	return (
		<div>
			<div>
				If you guess the right chin, you win. You have 5 seconds to guess. Right
				now you have to spell the celebrity's name right because I don't have
				time for your typos yet.
			</div>
			<Link to="/single-player">
				<button>GOT IT</button>
			</Link>
		</div>
	);
};

export default SinglePlayerInstructions;
