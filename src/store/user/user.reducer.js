import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        checkUserSession: (state) => {
            state.isLoading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        signInFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        googleSignInStart: (state) => {
            state.isLoading = true;
        },
        emailSignInStart: (state, {email, password}) => {
            state.isLoading = true
        },
        signUpStart: (state, { payload:{email, password, displayName}} ) => {},
        // signUpSuccess: (state,{payload:{user, displayName}}) => {
        // },
        signUpSuccess: (state, {payload: {user}}) => {
        },
        signUpFailed: (state, action) => {
            state.error = action.payload
        },
        signOutStart: () => {},
        signOutSuccess: (state) => {
            state.currentUser = null
        },
        signOutFailed: (state, action) => {
            state.error = action.payload
        },
    }
});


export const {
    checkUserSession,
    googleSignInStart,
    emailSignInStart,
    signInSuccess,
    signInFailed,
    signUpStart,
    signUpSuccess,
    signUpFailed,
    signOutFailed,
    signOutSuccess,
    signOutStart,

} = userSlice.actions;

export default userSlice.reducer;