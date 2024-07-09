import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tourReducer from "../features/tour/tourSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
    key : 'root',
    storage,
}

const reducer = combineReducers({
        auth : authReducer,
        tour : tourReducer
})

const persistedReducer = persistReducer(persistConfig , reducer,
    )

export const store = configureStore({
    // reducer : {
    //     auth : authReducer,
    //     tour : tourReducer
    // } 
    reducer : persistedReducer ,
})

