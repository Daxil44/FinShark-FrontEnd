import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      {/* Main Navbar */}
      <div className="flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Center: Search Link (hidden on mobile) */}
        <div className="hidden lg:flex justify-center flex-1">
          <Link to="/search" className="text-black hover:text-darkBlue font-bold">
            Search
          </Link>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          {isLoggedIn() ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center space-x-2 hover:text-darkBlue focus:outline-none"
              >
                <span>Welcome, {user?.userName ?? "User"}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" />
                </svg>
              </button>

              {/* Desktop Logout Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-darkBlue">
                Login
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white shadow-md rounded-md py-4 space-y-4 px-6">
          {/* Center Search on mobile dropdown */}
          <div className="flex justify-center">
            <Link to="/search" className="text-black hover:text-darkBlue font-bold">
              Search
            </Link>
          </div>

          {isLoggedIn() ? (
            <>
              <div className="text-center text-gray-700">Welcome, {user?.userName ?? "User"}</div>
              <button
                onClick={logout}
                className="w-full text-center px-4 py-2 text-sm text-white bg-lightGreen rounded hover:opacity-70"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block text-center hover:text-darkBlue">
                Login
              </Link>
              <Link
                to="/register"
                className="block px-8 py-3 font-bold rounded text-white bg-lightGreen text-center hover:opacity-70"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
