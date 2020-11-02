import * as types from "../actions/types";

const initChord = {
	name: "default",
	fret: 1,
	base: 1,
	opens: [],
	off: [],
	fingers: [[], [], [], [], [], []],
};

export const search = (state = initChord, action) => {
	switch (action.type) {
		case types.SET_CURRENT_CHORD:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default search;
