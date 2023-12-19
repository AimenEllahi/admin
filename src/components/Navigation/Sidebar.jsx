import React, { useState } from "react";
// import UserProfileDropDown from "./UserProfileDropDown";
import Dashboard from "../../assets/icons/system/Dashboard";
import Shop from "../../assets/icons/system/Shop";
import Products from "../../assets/icons/system/Products";
import NavLink from "./Navlink";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const list = [
    {
      href: `/dashboard`,
      icon: <Dashboard className="w-6 h-6 text-current" />,
      title: "Dashboard",
    },
    {
      href: "/view",
      icon: <Products className="w-6 h-6 text-current" />,
      title: "View Products",
    },

    // {
    //   href: "/add",
    //   icon: <Products className="w-6 h-6 text-current" />,
    //   title: "Add Products",
    // },

    {
      href: "/dealers",
      icon: <Shop className="w-6 h-6 text-current" />,
      title: "Dealers",
    },
    {
      href: "/ambassador",
      icon: <Products className="w-6 h-6 text-current" />,
      title: "Ambassador",
    },
    {
      href: "/salesrep",
      icon: <Products className="w-6 h-6 text-current" />,
      title: "SalesRep",
    },
    {
      href: "/warranty",
      icon: <Products className="w-6 h-6 text-current" />,
      title: "Warranty",
    },
  ];

  return (
    <div
      className={` w-[14rem]  px-5 p-2 bg-slate-800 sm:w-[11rem] lg:w-[14rem] h-full text-white flex flex-col justify-start gap-y-12 lg:px-1 absolute transition-all duration-1000 py-5 sm:py-0 sm:relative
   ${showSidebar ? " -translate-x-0" : " -translate-x-64"} sm:-translate-x-0 `}
    >
      <div className="text-center  mt-3 ">
        <span
          onClick={() => setShowSidebar(false)}
          className="  sm:hidden float-left"
        >
          <XSquare />
        </span>

        <Link
          to="/dashboard"
          className="font-semibold text-current text-2xl sm:text-xl lg:text-2xl"
        >
          Dashboard
        </Link>
      </div>
      <div className="space-y-5 flex-auto px-5">
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
