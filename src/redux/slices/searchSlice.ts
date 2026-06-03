import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      const query = action.payload;

      if (query === "") return;

      state.query = action.payload;

      console.log(`query: ${query} succesfully set`);
    },
  },
  selectors: {
    getQuery: (state: SearchState) => state.query,
  },
});

export const { getQuery } = searchSlice.selectors;

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
