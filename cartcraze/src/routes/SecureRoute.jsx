import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const data = useSelector((state) => state.auth);
  return <>{data.isLoggedIn ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default SecureRoute;
