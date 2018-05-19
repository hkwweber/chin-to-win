import axios from "axios";

//action types
const GET_ALL_CELEBS_FROM_SERVER = "GET_ALL_CELEBS_FROM_SERVER";
const SET_NEXT_CELEB = "SET_NEXT_CELEB";

//action creators
const getAllCelebsFromServer = celebs => ({
	type: GET_ALL_CELEBS_FROM_SERVER,
	celebs
});

export const setNextCeleb = index => ({
	type: SET_NEXT_CELEB,
	index
});

//thunks!
export const fetchAllCelebsFromServer = () => dispatch =>
	axios
		.get("/api/celebs")
		.then(res => {
			dispatch(getAllCelebsFromServer(res.data));
		})
		.catch(error => console.log(error));

//reducer
let initialState = {
	allCelebs: [],
	currentCeleb: {
		name: "Jennifer Lopez",
		fullPhoto: "https://i.imgur.com/flewa1k.jpg",
		chinCropPhoto: "https://i.imgur.com/FBbk0RC.jpg"
	}
};

export default function(state = initialState, action) {
	let reducedCelebs;
	let nextCeleb;
	switch (action.type) {
		case GET_ALL_CELEBS_FROM_SERVER:
			return Object.assign({}, state, { allCelebs: action.celebs });
		case SET_NEXT_CELEB:
			return Object.assign({}, state, {
				allCelebs: state.allCelebs
					.slice(0, action.index)
					.concat(state.allCelebs.slice(action.index + 1)),
				currentCeleb: state.allCelebs[action.index]
			});
		default:
			return state;
	}
}
