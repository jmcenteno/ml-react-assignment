import * as Constants from './constants';

const ACTION_HANDLERS = {
	
	[Constants.GET_SPACESHIPS]: function (state, action) {
		return Object.assign({}, state, {
			spaceships: action.payload
		});
	},
	
	[Constants.GET_SPACESHIP_DETAILS]: function (state, action) {
		return Object.assign({}, state, {
			spaceshipDetails: action.payload || null
		});
	},

}

const initialState = {
	spaceships: null,
	spaceshipDetails: null,
};

export default function reducer (state = initialState, action) {
  
	const handler = ACTION_HANDLERS[action.type];

	return (handler ? handler(state, action) : state);

}
