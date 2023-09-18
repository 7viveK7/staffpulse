import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import fetchAnnouncement from '../Api/api';
// 1. intialState
const initialState = {
  tokenId: '',
  isAuthenticated: false,
  name: '',
  password: '',
  phoneNumber: '',
  email: '',
  role: "",
  Address: '',
  hireDate: '',
  teamName: '',
  EmployeeId: '',
  teamStrength: 0,
  leaves: [],
  teamMembers: [],
  announcements: [],
  status: 'idle',
  error: null,
};

//2.selectors
export const AnnouncementSelector = (state) => state.announcements
export const statusSelector = (state) => state.status
export const errorSelector = (state) => state.error


//3.async thunk 
export const AnnouncementsAction = createAsyncThunk('home/announcements', fetchAnnouncement)

//4.Slice reducer

const slice1 = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AnnouncementsAction.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(AnnouncementsAction.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.announcements = action.payload;
      })
      .addCase(AnnouncementsAction.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { setData } = slice1.actions;
export default slice1.reducer;
