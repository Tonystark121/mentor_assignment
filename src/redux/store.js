import { configureStore } from "@reduxjs/toolkit";
import appSlice from './actionSlice'
import paginationSlice from "./paginationSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer:{
        app : appSlice,
        page : paginationSlice,
        filter: filterSlice
    }
})

export default store