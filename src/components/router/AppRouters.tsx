import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { openLogin } from "../../redux/slice/login/loginReducer";
import TrikosService from "../../Services/Axios/AxiosTrikos.service";
import Login from "../views/Login";
import DashboardRoutes from "./DashboardRoutes";

const AppRouters = () => {
  const open = useAppSelector((state) => state.login.open);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("AppRouters: ", token);

    if (token) {
      TrikosService.get(token).then((response: any) => {
        console.log(response.data);
        dispatch(openLogin());
      });
    }
  }, [dispatch]);
  console.log("AppRouters: ", open);

  return (
    <BrowserRouter>
      <Routes>
        {open ? (
          <Route path="/*" element={<DashboardRoutes />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
