import { combineReducers } from 'redux';
import userSlice from './userSlice';
import Auth from './Auth';
// import employeeSlice from './employeeSlice';
// import slice1Reducer from './slice1';
// import slice2Reducer from './slice2';

const rootReducer = combineReducers({
  user: userSlice,
  Auth,
});

export default rootReducer;
