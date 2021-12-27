import { Route, Routes } from "react-router-dom";
import { Home as RouterHome } from "../../config/router/paths";
import DrawerHeader from "../DrawerHeader";
import Home from "../views/Home";

const DashboardRoutes = () => {
  return (
    <>
      <DrawerHeader />
      <Routes>
        <Route path={RouterHome} element={<Home />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
