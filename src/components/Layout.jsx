import React from "react";
import Sidebar from "./Navigation/Sidebar";
import Navbar from "./Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full ">
        <Sidebar />

        {/* Main Content */}
        <div className="p-4 flex-1 bg-gray-100 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
