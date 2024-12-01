import React from "react";
import Navber from "./../navber/Navber";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navber></Navber>
      <Outlet />
    </div>
  );
}

export default Layout;
