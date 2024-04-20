import { configureStore } from "@reduxjs/toolkit";
import appSlice from './actionSlice'
import paginationSlice from "./paginationSlice";

const store = configureStore({
    reducer:{
        app : appSlice,
        page : paginationSlice
    }
})

export default store