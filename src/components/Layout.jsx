import React from "react";
import Sidebar from "./Navigation/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-full w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-4 flex-1 bg-gray-100">{children}</div>
    </div>
  );
};

export default Layout;
