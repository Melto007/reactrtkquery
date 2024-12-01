import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/apiSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import authReducer from '../features/users/authSlice'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }
    ).concat(apiSlice.middleware)
})

export const persistor = persistStore(store)