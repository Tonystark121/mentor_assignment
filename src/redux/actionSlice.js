import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = createAsyncThunk("appSlice/fetchData", async () => {
    try {
       const response = await fetch(API_KEY)
       const data = await response.json()
       return data
    } catch (error) {
        throw error
    }
});

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      })
      .addCase(fetchData.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
      });
  },
});

export default appSlice.reducer;
