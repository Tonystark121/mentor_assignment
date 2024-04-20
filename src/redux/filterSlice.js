import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  text: "",
  size: null,
  type: null,
  date: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSize: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        size: payload.size,
      };
    },
    setType: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        type: payload.type,
      };
    },
    setDate: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        date: payload.date,
      };
    },
    setText: (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        text: payload.text,
      };
    },
  },
});
export const { setSize, setType, setDate, setText } = filterSlice.actions;
export default filterSlice.reducer;
