import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = 'https://jsonplaceholder.typicode.com/posts'

const fetchData = createAsyncThunk('appSlice/fetchData', async () => {
    try {
        const response = await fetch(API_KEY)
        if(response.ok){
            return response
        }
        else throw new Error('Something went wrong!')
    } catch (error) {
        throw new Error(error)
    }
})

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
   extraReducers:builder => {
    builder
       .addCase(fetchData.pending, ()=>{
        
       })
   }
})

export default appSlice.reducer