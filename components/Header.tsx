import React, { useState } from "react";
// @ts-ignore - Suppressing named export errors from react-router-dom due to potential environment type mismatch
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";

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
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-grey shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-0.5">
              <div className=" p-2 rounded-md flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="VTPL Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold navy-text leading-tight tracking-tight uppercase">
                  Vikash Techsec
                </span>
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                  Private Limited
                </span>
              </div>
            </Link>
          </div>

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
            <Link
              to="/contact"
              className="accent-bg text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-xl text-navy-text hover:text-blue-600 hover:scale-105 transition transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
              {/* Optional subtle pulse effect */}
              <span className="absolute inset-0 rounded-xl bg-blue-100 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-grey animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold rounded-md ${
                  isActive(link.path)
                    ? "accent-bg text-white"
                    : "navy-text hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-blue-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
