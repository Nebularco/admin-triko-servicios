import { createSlice } from "@reduxjs/toolkit";

export interface openState {
  data: never[];
}

const initialState: openState = {
  data: [],
};

export const openSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    addDataUser: (state, action) => {
      state.data = action.payload;
      const data = state.data;
    },
  },
});

export const { addDataUser } = openSlice.actions;

export default openSlice.reducer;
