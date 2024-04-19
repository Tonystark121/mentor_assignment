import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
    data : null,
    error:null
}

const appSlice = createSlice({
   name:'appSlice',
   initialState,
   reducers:{

   },
   extraReducers:builder => {}
})

export default appSlice.reducer