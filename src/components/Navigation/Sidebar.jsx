import React, { useState } from "react";

import Dashboard from "../../assets/icons/system/Dashboard";
import Shop from "../../assets/icons/system/Shop";
import Products from "../../assets/icons/system/Products";
import NavLink from "./Navlink";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";
import useSidebar from "../../store/sidebar";

const Sidebar = () => {
  const { show, setShow } = useSidebar((state) => state);
  const list = [
    {
      href: `/dashboard`,
      icon: <Dashboard className='w-6 h-6 text-current' />,
      title: "Dashboard",
    },
    {
      href: "/view",
      icon: <Products className='w-6 h-6 text-current' />,
      title: "View Products",
    },

    {
      href: "/dealers",
      icon: <Shop className='w-6 h-6 text-current' />,
      title: "Dealers",
    },
    {
      href: "/dealerdetails",
      icon: <Products className='w-6 h-6 text-current' />,
      title: "Dealer Details",
    },
    {
      href: "/ambassador",
      icon: <Products className='w-6 h-6 text-current' />,
      title: "Ambassador",
    },
    {
      href: "/salesrep",
      icon: <Products className='w-6 h-6 text-current' />,
      title: "SalesRep",
    },
    {
      href: "/warranty",
      icon: <Products className='w-6 h-6 text-current' />,
      title: "Warranty",
    },
  ];

  return (
    <div
      className={` w-screen px-5 p-2 z-10 bg-slate-800 md:w-[12rem] lg:w-[14rem] h-screen md:h-auto text-white flex flex-col justify-start gap-y-12 lg:px-1 absolute transition-all duration-1000 py-5 sm:py-0 md:relative
   ${show ? " -translate-x-0" : " -translate-x-[100%]"} md:-translate-x-0 `}
    >
      <div className='text-center flex items-center mt-3 gap-x-3'>
        <XSquare
          className='w-6 h-6  text-current md:hidden cursor-pointer'
          onClick={() => setShow(false)}
        />
        <Link
          to='/dashboard'
          className='font-semibold text-current text-2xl md:text-xl lg:text-2xl'
        >
          Dashboard
        </Link>
      </div>
      <div className='space-y-5 flex-auto px-5'>
        {list.map((l, index) => (
          <NavLink
            key={l.href || index} // Use index as a fallback for non-unique keys
            icon={l.icon}
            to={l.href}
            title={l.title}
            subItems={l.subItems ? l.subItems : []}
          />
        ))}
      </div>

      {/* <UserProfileDropDown /> */}
    </div>
  );
};

export default Sidebar;
