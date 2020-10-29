import { combineReducers } from 'redux';

import chord from './currentChord';
import search from './search';
import toast from './toast';

const rootReducer = combineReducers({
  chord,
  search,
  toast
});

export default rootReducer;