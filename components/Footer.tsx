import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-slate-400 pt-14 pb-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/L.jpg"   // same banner image or footer-specific image
          alt="Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-md">
                <img
                  src="/images/logo.png"
                  alt="VTPL Logo"
                  className="w-12 h-10 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white uppercase">
                Vikash Techsec Pvt. Ltd.
              </span>
            </Link>

            <p className="text-sm leading-relaxed font-medium">
              India-based Private Limited company delivering high-performance
              IT hardware, infrastructure, and technology solutions for
              Government and Enterprise sectors.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/vikashtechsecprivatelimited"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-all"
              >
                <Linkedin size={18} className="text-white" />
              </a>

              <a
                href="https://x.com/vtpl_2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-all"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm font-semibold">
              {[
                "About Us",
                "Services",
                "Products",
                "Industries",
                "Careers",
                "Compliance",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                    className="hover:text-white transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Operational Presence
            </h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <span className="text-blue-500 block">Ranchi (HQ)</span>
                <span className="opacity-70">Jharkhand</span>
              </li>
              <li>
                <span className="text-white block">Patna Office</span>
                <span className="opacity-70">Bihar</span>
              </li>
              <li>
                <span className="text-white block">Kolkata Hub</span>
                <span className="opacity-70">West Bengal</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">
              Official Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-4">
                <Phone className="text-blue-600 w-5 h-5" />
                <a
                  href="tel:+919065126999"
                  className="text-white hover:text-blue-400 transition-all"
                >
                  +91 90651 26999
                </a>
              </li>

              <li className="flex items-center space-x-4">
                <Mail className="text-blue-600 w-5 h-5" />
                <a
                  href="mailto:adminrnc@vtpl.org.in?subject=Business%20Enquiry"
                  className="text-white hover:text-blue-400 transition-all break-all"
                >
                  adminrnc@vtpl.org.in
                </a>
              </li>

              <li className="flex items-center space-x-4">
                <Mail className="text-blue-600 w-5 h-5" />
                <a
                  href="mailto:hr@vtpl.org.in?subject=Career%20Opportunity"
                  className="text-white hover:text-blue-400 transition-all break-all"
                >
                  hr@vtpl.org.in
                </a>
              </li>

              <li className="flex items-start space-x-4">
                <MapPin className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-xs leading-relaxed opacity-70">
                  Saluja Mansion, P P Compound, Ranchi – 834001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">
          <p>© 2026 Vikash Techsec Private Limited</p>
          <div className="mt-3 md:mt-0 flex space-x-8">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
