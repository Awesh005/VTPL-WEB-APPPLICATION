
import React from 'react';
// @ts-ignore - Suppressing named export errors from react-router-dom due to potential environment type mismatch
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, ShieldCheck, ArrowRight, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="navy-bg text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-1.5 rounded-md">
                <ShieldCheck className="text-[#0B1F3A] w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white uppercase tracking-tight">Vikash Techsec</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              India-based Private Limited company providing high-performance technology and security solutions for Government and Enterprise sectors.
            </p>
            <div className="flex space-x-4">
              <a href="https://in.linkedin.com/company/vikashtechsecprivatelimited" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-blue-600 transition-all">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="https://x.com/vtpl_2025" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-blue-600 transition-all">
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">Navigation</h3>
            <ul className="space-y-4 font-semibold text-sm">
              {['About Us', 'Services', 'Products', 'Industries', 'Careers', 'Compliance', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-white flex items-center transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">Operational Presence</h3>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-widest">
              <li className="flex flex-col">
                <span className="text-blue-500 mb-1">Ranchi (Headquarters)</span>
                <span className="opacity-70">Jharkhand Region</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white mb-1">Patna Office</span>
                <span className="opacity-70">Bihar Region</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white mb-1">Kolkata Hub</span>
                <span className="opacity-70">West Bengal Region</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">Official Contact</h3>
            <ul className="space-y-6 font-medium text-sm">
              <li className="flex items-center space-x-4">
                <Phone className="text-blue-600 w-5 h-5 shrink-0" />
                <span className="text-white">+91 90651 26999</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-blue-600 w-5 h-5 shrink-0" />
                <span className="text-white break-all">adminrnc@vtpl.org.in</span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="text-blue-600 w-5 h-5 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed opacity-70">Main Branch: Saluja Mansion, P P Compound, Ranchi - 834001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.25em] opacity-50">
          <p>© 2024 Vikash Techsec Private Limited.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;