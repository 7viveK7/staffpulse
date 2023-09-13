import { combineReducers } from 'redux';
import userSlice from './userSlice';
// import employeeSlice from './employeeSlice';
// import slice1Reducer from './slice1';
// import slice2Reducer from './slice2';

const rootReducer = combineReducers({
  slice1: userSlice,
//   slice2: slice2Reducer,
});

export default rootReducer;
