import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const selectAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USER_URL)
        return [...response.data]
    } catch (error) {
        return error.message
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(selectAllUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const getAllUsers = (state) => state.users

export default userSlice.reducer
