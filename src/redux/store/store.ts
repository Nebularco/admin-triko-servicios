import { configureStore } from "@reduxjs/toolkit";
//reducer
import loginReducer from "../slice/login/loginReducer";
import drawer from "../slice/drawer";
import loading from "../slice/loading";
import dataUser from "../slice/dataTable";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    drawer,
    loading,
    dataUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
