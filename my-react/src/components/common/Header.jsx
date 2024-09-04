import React, { useState } from "react";
import logoImg from "../assets/images/logo-black.jpg";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { LinkData } from "../assets/data/dummydata";
import { Link } from "react-router-dom";

const categories = [
  { title: "Cybersecurity", url: "/category/technology" },
  { title: "Business", url: "/category/business" },
  { title: "Creative Arts", url: "/category/creative-arts" },
  { title: "Personal Development", url: "/category/personal-development" },
  { title: "Languages", url: "/category/languages" },
  { title: "Health & Fitness", url: "/category/health-fitness" },
  { title: "Science", url: "/category/science" },
  { title: "Mathematics", url: "/category/mathematics" },
];

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer transition-all hover:scale-110 hover:text-cyan-500"
        onClick={toggleDropdown}
      >
        <HiViewGrid size={20} />
        <span>Category</span>
      </div>
      {isOpen && (
        <div className="absolute bg-white shadow-md p-4 mt-2 rounded-md w-48">
          <ul className="flex flex-col gap-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={category.url}
                  className="text-black hover:text-cyan-500 transition-colors duration-300"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  const navigate = useNavigate(); // Using react-router's useNavigate hook for navigation

  const handleShoppingBagClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); // Update state to reflect logged-out status
    navigate("/"); // Navigate to home page or any desired page after logout
  };

  const handleAuthAction = () => {
    setIsLoggedIn(true); // Update state to reflect logged-in status
  };

  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <img src={logoImg} alt="Logo" className="h-28 w-49" />
            <CategoryDropdown />
          </div>

          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link, index) => (
                <li
                  className="cursor-pointer transition-all hover:scale-110 hover:text-cyan-500"
                  key={index}
                  onClick={() => setOpen(null)}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 text-sm" : "text-[18px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="account flex items-center gap-5">
            <button
              className="cursor-pointer transition-all hover:scale-110 hover:text-cyan-500"
              onClick={handleShoppingBagClick}
            >
              <BiShoppingBag size={25} />
            </button>

            {isLoggedIn ? (
              <>
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded mr-4 cursor-pointer transition-all hover:scale-110 hover:text-cyan-500"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded mr-4 cursor-pointer transition-all hover:scale-110 hover:text-cyan-500"
                  onClick={handleLoginClick}
                >
                  Sign Up
                </button>
              </>
            )}

            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
