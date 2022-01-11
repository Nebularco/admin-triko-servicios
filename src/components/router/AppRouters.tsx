import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import Login from "../views/Login";
import DashboardRoutes from "./DashboardRoutes";

function AppRouters() {
  const open = useAppSelector((state) => state.login.open);
  //const open = true;


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
}

export default AppRouters;
