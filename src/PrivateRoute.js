import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./context/Auth";

const PrivateRoute = () => {
  const isAuthenticated = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
