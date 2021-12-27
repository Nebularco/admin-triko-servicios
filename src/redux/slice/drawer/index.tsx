import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: { open: false },
  reducers: {
    setDrawer: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
