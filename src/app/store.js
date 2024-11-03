import { configureStore } from "@reduxjs/toolkit"
// import postReducer from '../features/posts/postSlice'
import { apiSlice } from "../features/api/apiSlice"
// import usersReducer from '../features/users/userSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})