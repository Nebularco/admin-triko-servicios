import { createSlice } from "@reduxjs/toolkit";

export interface openState {
    open: boolean,
    token: "",
}

const initialState: openState = {
    open: false,
    token: "",
}

export const openSlice = createSlice({
    name: 'openSlice',
    initialState,
    reducers: {
        openLogin: (state) => {
            state.open = true
        },
        closeLogin: (state) => {
            state.open = false
        },
        addTokenUser: (state, action) => {
            state.token = action.payload
            const token = state.token
            localStorage.setItem('token', token)
        },
    }
})

export const { openLogin,closeLogin, addTokenUser } = openSlice.actions

export default openSlice.reducer
