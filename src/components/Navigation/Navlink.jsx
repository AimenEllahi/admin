import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SubNavLink = ({ to, index, totalItems, title }) => {
  return (
    <Link
      to={to}
      className={`flex gap-x-2 mt-2 items-center duration-300 transition-colors hover:text-white cursor-pointer`}
    >
      <div className="h-2 w-2 bg-white relative ml-[-4px] rounded-3xl">
        {index !== totalItems && (
          <div className="absolute top-[200%] left-0 translate-x-[30%] w-[10px] h-[2rem] border-l-[2px] border-white translate-y-[-50%]"></div>
        )}
      </div>
      <span className="font-medium ms-4 text-base sm:text-xs lg:text-base text-current group-hover:font-medium">
        {title}
      </span>
    </Link>
  );
};

const Navlink = ({ icon, to, title, subItems }) => {
  const [displaySubItems, setDisplaySubItems] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`flex gap-x-2 items-center font-normal duration-300 transition-colors hover:text-white cursor-pointer`}
        onClick={() => {
          if (subItems?.length > 0) setDisplaySubItems(!displaySubItems);
          else navigate(to);
        }}
      >
        {icon}
        <span className="text-xl sm:text-base lg:text-xl text-current group-hover:font-medium">
          {title}
        </span>
        {subItems?.length > 0 && <ChevronDown size={15} />}
      </div>
      <div
        className={`ml-3 transition-all duration-500 ${
          !displaySubItems && "hidden "
        }`}
      >
        {subItems.map((item, index) => (
          <SubNavLink
            title={item.title}
            index={index}
            totalItems={subItems.length - 1}
            to={item.to}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Navlink;
