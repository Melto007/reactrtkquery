import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload
            state.user = user
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentAuth = (state) => state.auth.isAuthenticated