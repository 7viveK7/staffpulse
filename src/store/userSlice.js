import {createSlice} from '@reduxjs/toolkit';
// 1. intialState
const initialState = {
 tokenId:'',
 isAuthenticated:false,
 name:'',
 password:'',
 phoneNumber:'',
 role:"",
 Address:'',
 hireDate:'',
 teamName:'',
 EmployeeId:'',
 teamStrength:0,
teamMembers:[],
};

//2.selectors

//3.async thunk

//4.Slice reducer

const slice1 = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = slice1.actions;
export default slice1.reducer;
