import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rowsLength: 5,
  currPage: 1,
  startIdx: 0,
  lastIdx: 5,
  totalPages: 1,
};

const pageSlice = createSlice({
  name: "pageSlice",
  initialState,
  reducers: {
    setTotalPages: (state, { payload }) => {
      return {
        ...state,
        totalPages: Math.ceil(
          Math.round(payload.totalItems / state.rowsLength)
        ),
      };
    },
    rowsLengthChange: (state, { payload }) => {
      const newRowsLength = parseInt(payload.itemsLengthPerPage);
      const newTotalPages = Math.ceil(
        Math.round(payload.totalItems / parseInt(payload.itemsLengthPerPage))
      );
      let newCurrPage = state.currPage;
      if (newCurrPage > newTotalPages) {
        newCurrPage = newTotalPages;
      }
      const newStartIdx = (newCurrPage - 1) * newRowsLength;
      const newLastIdx = Math.min(
        newCurrPage * newRowsLength,
        payload.totalItems
      );

      return {
        ...state,
        rowsLength: newRowsLength,
        currPage: newCurrPage,
        startIdx: newStartIdx,
        lastIdx: newLastIdx,
        totalPages: newTotalPages,
      };
    },

    moveToNextPage: (state) => {
      if (state.currPage === state.totalPages) {
        return state;
      } else {
        return {
          ...state,
          startIdx: state.lastIdx,
          currPage: state.currPage + 1,
          lastIdx: (state.currPage + 1) * state.rowsLength,
        };
      }
    },
    moveToPrevPage: (state) => {
      if (state.currPage === 1) {
        return state;
      } else {
        return {
          ...state,
          lastIdx: state.startIdx,
          currPage: state.currPage - 1,
          startIdx: (state.currPage - 2) * state.rowsLength,
        };
      }
    },
  },
  extraReducers: (builder) => {},
});
export const {
  rowsLengthChange,
  setTotalPages,
  moveToNextPage,
  moveToPrevPage,
} = pageSlice.actions;
export default pageSlice.reducer;
