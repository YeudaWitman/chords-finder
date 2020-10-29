import * as types from '../actions/types';

const searchInitState = {
    query: '',
};

export const search = (state = searchInitState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}

export default search;