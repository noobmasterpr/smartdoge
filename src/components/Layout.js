import React from "react";
import Navbar from "./Navbar";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <SidebarLeft />
      <SidebarRight />
    </div>
  );
};

export default Layout;
