import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    selectedCountry: "tr",
    selectedCategory: "general",
    filterText: "",
  },

  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    filterText: (state, action) => {
      state.filterText = action.payload;
    },
  },
});

export const { setSelectedCountry, setSelectedCategory, filterText } =
  filterSlice.actions;

export default filterSlice.reducer;
