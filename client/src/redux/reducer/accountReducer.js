import { createSlice } from "@reduxjs/toolkit";

const accountReducer = createSlice({
    name: "accountReducer",
    initialState: {
        account: {},
        isAuthenticated: false,
        isAdmin: false,
    },
    reducers: {
        LOGIN: (state, action) => {
            state.account = action.payload[0];
            state.isAuthenticated = true;
        },
        ISADMIN: (state, action) => {
            console.log(action.payload);
            state.isAdmin = action.payload;
        },
        LOGOUT: (state) => {
            state.account = {};
            state.isAuthenticated = false;
            state.isAdmin = false;
        },
    },
});

export const { LOGIN, LOGOUT, ISADMIN } = accountReducer.actions;

export const selectAccount = (state) => state.accountReducer.account;
export const selectIsAuthenticated = (state) =>
    state.accountReducer.isAuthenticated;
export const selectIsAdmin = (state) => state.accountReducer.isAdmin;

export default accountReducer.reducer;
