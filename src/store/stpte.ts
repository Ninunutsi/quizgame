import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./protechteRoute"

const combi = combineReducers({
    isAuth: authSlice
})

export const store = configureStore({
    reducer: combi
})