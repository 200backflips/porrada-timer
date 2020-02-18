import { combineReducers } from 'redux';
import intervalsReducer from './intervals';
import latestPresetReducer from './latestPreset';
import isCountingDownReducer from './isCountingDown';
import counterReducer from './counter';

const rootReducer = combineReducers({
  intervals: intervalsReducer,
  latestPreset: latestPresetReducer,
  isCountingDown: isCountingDownReducer,
  counter: counterReducer
});

export default rootReducer;
