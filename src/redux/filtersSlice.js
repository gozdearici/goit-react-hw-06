import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filtersReducer = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersReducer.actions;
export const selectNameFilter = (state) => state.filters.name;
export default filtersReducer.reducer;
