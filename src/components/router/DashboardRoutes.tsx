import { Route, Routes } from "react-router-dom";
import { Home as RouterHome } from "../../config/router/paths";
import DrawerAndHeader from "../DrawerHeader";
import Custumers from "../views/Custumers";
import Home from "../views/Home";
import Login from "../views/Login";
import ServiceRequests from "../views/ServiceRequests";
import TrikosAprobados from "../views/TrikosAprobados";
import User from "../views/User";

const DashboardRoutes = () => {
  return (
    <>
    <DrawerAndHeader />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="clients" element={<Custumers />} />
        <Route path="approved" element={<TrikosAprobados />} />
        <Route path="service-requests" element={<ServiceRequests />} />
        <Route path="orders" element={<Home />} />
        <Route path="logout" element={<Login />} />
        <Route path="Users/:table/:id" element={<User />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
