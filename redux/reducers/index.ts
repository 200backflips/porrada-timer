import { combineReducers } from 'redux';
import intervalsReducer from './intervals';
import latestPresetReducer from './latestPreset';
import isCountingDownReducer from './isCountingDown';
import counterReducer from './counter';
import pickerReducer from './picker';

const rootReducer = combineReducers({
  intervals: intervalsReducer,
  latestPreset: latestPresetReducer,
  isCountingDown: isCountingDownReducer,
  counter: counterReducer,
  picker: pickerReducer
});

export default rootReducer;
