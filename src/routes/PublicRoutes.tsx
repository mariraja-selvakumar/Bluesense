import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Loader = lazy(() => import("../views/loader/Loader"));
const Login = lazy(() => import("../views/login/Login"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const Admin = lazy(() => import("../views/admin/Admin"));

const PublicRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<PrivateRoutes />}>
            <Route element={<Admin />} path="admin" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRoutes;
