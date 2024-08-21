import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLanguageChange: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguageChange } = configSlice.actions;
export default configSlice.reducer;
