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
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
