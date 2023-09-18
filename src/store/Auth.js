import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import fetchAnnouncement from '../Api/api';


const userList = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        mobileNumber: 9999999991,
        password: 'password123',
        role: 'manager',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        mobileNumber: 9999999992,
        password: 'secretPassword',
        role: 'hr',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        mobileNumber: 9999999993,
        password: 'mySecurePassword',
        role: 'developer',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        name: 'Bob Brown',
        email: 'bob@example.com',
        mobileNumber: 9999999994,
        password: 'bobPassword',
        role: 'manager',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        name: 'Eve Wilson',
        email: 'eve@example.com',
        mobileNumber: 9998887777,
        password: 'eveSecret',
        role: 'developer',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    }
];
// 1. intialState
const initialState = {
    tokenId: '',
    isAuthenticated: false,
    authenticatedUser: [],
    otp: '',
    employees: userList,
    status: 'idle',
    error: null,
};

//2.selectors
export const employeesSelector = (state) => state.Auth.employees
export const AuthUserSelector = (state) => state.Auth.authenticatedUser

const slice2 = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // setUser: (state, action) => {
        //     state.user = action.payload;
        // },
        setAuthUser: (state, action) => {
            state.authenticatedUser = action.payload
        }
    },

});

export const { setAuthUser } = slice2.actions;
export default slice2.reducer;
