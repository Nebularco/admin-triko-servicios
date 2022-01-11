import { Route, Routes } from "react-router-dom";
import Customers from "../views/Customers";
import Orders from "../views/Orders";
import Services from "../views/Services";
import Trikos from "../views/Trikos";

const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Services />} />
        <Route path="servicios" element={<Services />} />
        <Route path="clientes" element={<Customers />} />
        <Route path="trikos" element={<Trikos />} />
        <Route path="ordenes" element={<Orders />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
