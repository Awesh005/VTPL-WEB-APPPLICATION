import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Compliance", path: "/compliance" },
    { name: "Contact Us", path: "/contact" }, // now normal item
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ================= HEADER ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="VTPL Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold navy-text uppercase">
                  Vikash Techsec
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase">
                  Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-all hover:text-blue-600 ${
                    isActive(link.path)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "navy-text"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md hover:scale-105 transition"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 max-w-xs
        bg-white/90 backdrop-blur-xl shadow-2xl z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="px-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`group relative flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-300
              ${
                isActive(link.path)
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow"
                  : "navy-text hover:bg-blue-50"
              }`}
            >
              {/* Active indicator */}
              {isActive(link.path) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white rounded-full"></span>
              )}

              <span className="ml-2">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
