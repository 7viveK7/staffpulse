import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import fetchAnnouncement from '../Api/api';


const userList = [
    {
        id: 0,
        name: 'John Doe',
        email: 'john@example.com',
        mobileNumber: 9999988771,
        password: '1',
        role: 'Manager',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        id: 1,
        name: 'Jane Smith',
        email: 'jane@example.com',
        mobileNumber: 9999988772,
        password: '2',
        role: 'HR',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
        hireDate: '2022-01-01',
    },
    {
        id: 2,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        mobileNumber: 9999988773,
        password: 'mySecurePassword',
        role: 'Developer',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
        hireDate: '2022-01-01',
    },
    {
        id: 3,
        name: 'Bob Brown',
        email: 'bob@example.com',
        mobileNumber: 9999988774,
        password: 'bobPassword',
        role: 'Designer',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        hireDate: '2022-01-01',
    },
    {
        id: 4,
        name: 'Eve Wilson',
        email: 'eve@example.com',
        mobileNumber: 9998887777,
        password: 'eveSecret',
        role: 'Developer',
        address: '123 Main Street, Anytown, USA',
        salary: 75000,
        profile:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
        hireDate: '2022-01-01',
    }
];
// 1. intialState
const initialState = {
    tokenId: '',
    isNetwork: null,
    isAuthenticated: false,
    authenticatedUser: [],
    otp: '',
    employees: userList,

};

//2.selectors
export const employeesSelector = (state) => state.Auth.employees
export const AuthUserSelector = (state) => state.Auth.authenticatedUser
export const networkSelector = (state) => state.Auth.isNetwork

const slice2 = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // setUser: (state, action) => {
        //     state.user = action.payload;
        // },
        setAuthUser: (state, action) => {
            state.authenticatedUser = action.payload
        },
        setNetwork: (state, action) => {
            state.isNetwork = action.payload
        },
    },

});

export const { setAuthUser, setNetwork } = slice2.actions;
export default slice2.reducer;
