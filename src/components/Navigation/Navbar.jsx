import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-gray-800 p-4 w-full">
        <div className="container mx-auto flex items-center">
          {/* Mobile Menu Icon */}
          <div onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
          </div>
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-gray-800 bg-opacity-75 transition-transform duration-300 transform translate-x-0">
          <div className="w-64 h-full bg-white overflow-y-auto">
            <div className="flex justify-end p-4" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faTimes} className="text-2xl text-black" />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold">Admin Panel</h2>
            </div>
            <ul>
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/add"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Add Record
                </Link>
              </li>
              <li>
                <Link
                  to="/view"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  View Records
                </Link>
              </li>
              <li>
                <Link
                  to="/dealers"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Dealers
                </Link>
              </li>
              <li>
                <Link
                  to="/ambassador"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Ambassador
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  to="/salesrep"
                  className="block px-4 py-2 hover:bg-gray-200 text-gray-800 border-b"
                >
                  Sales Rep
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
