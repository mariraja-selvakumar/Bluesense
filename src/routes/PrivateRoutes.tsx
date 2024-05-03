import { Outlet } from "react-router-dom";
import Navbar from "../views/navbar/Navbar";

const PrivateRoutes = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default PrivateRoutes;
