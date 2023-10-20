import React from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <h2>Menu</h2>
      <Outlet />
    </div>
  );
}

export default Layout;
