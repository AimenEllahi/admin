import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-[100%] ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white text-2xl font-bold hidden md:block">
          LOGO
        </div> */}

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        <div className={`relative ${isMobileMenuOpen ? "" : "md:hidden"}`}>
          <button
            onClick={toggleDropdown}
            className={`text-white focus:outline-none ${
              isMobileMenuOpen ? "md:hidden" : ""
            }`}
          >
            {/* Profile picture */}
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <img
                src="your_profile_image_url.jpg"
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </div>
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                <li>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                    Edit Profile
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="bg-gray-800 text-white absolute top-16 right-0 mt-2 w-48 border border-gray-300 rounded-lg shadow-lg">
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/addRecord"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Add Record
              </a>
            </li>
            <li>
              <a
                href="/editRecord"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Edit Record
              </a>
            </li>
            {/* Add more links for other pages */}
          </ul>
        </div>
      )}
    </nav>
  );
}
