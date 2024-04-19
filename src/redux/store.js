import { configureStore } from "@reduxjs/toolkit";
import appSlice from './actionSlice'

const store = configureStore({
    reducer:{
        app : appSlice
    }
})

export default store