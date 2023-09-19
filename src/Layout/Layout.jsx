import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative z-10">
      <Header />
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
