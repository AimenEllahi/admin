import React from "react";
import Sidebar from "./Navigation/Sidebar";
import Navbar from "./Navigation/Navbar";
import { XSquare, Menu } from "lucide-react";
import useSidebarStore from "../store/sidebar";
const Layout = ({ children }) => {
  const { show, setShow } = useSidebarStore((state) => state);
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
      className='flex flex-col max-w-screen w-screen h-full   overflow-hidden'
    >
      {/* <Navbar /> */}
      <div className='flex h-full !min-h-screen  max-w-[100vw] !overflow-x-hidden'>
        <Sidebar />
        <div className=' absolute top-2 left-2'>
          {!show && <Menu onClick={() => setShow(!show)} />}
        </div>

        {/* Main Content */}
        <div className='p-4  flex-1 bg-white max-w-screen w-screen !overflow-hidden md:w-full'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
