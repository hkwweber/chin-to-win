import axios from 'axios';


//action types
const GET_ALL_CELEBS_FROM_SERVER = 'GET_ALL_CELEBS_FROM_SERVER';

//action creators
const getAllCelebsFromServer = (celebs) => ({type: GET_ALL_CELEBS_FROM_SERVER, celebs});

//thunks!
export const fetchAllCelebsFromServer = () => dispatch =>
	axios.get('/api/celebs')
		.then(res => {
			dispatch(getAllCelebsFromServer(res.data))
		})
		.catch(error => console.log(error));

//reducer
export default function (state = [], action) {
	switch (action.type) {
		case GET_ALL_CELEBS_FROM_SERVER:
			return action.celebs;
		default:
			return state;
	}
}
