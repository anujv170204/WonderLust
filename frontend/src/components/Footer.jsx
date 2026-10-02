import React from 'react';
import { Compass, GraduationCap, Phone, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">WonderLust</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A modern, full-featured hotel and property booking platform built for seamless stays and verified hosting.
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-400 bg-slate-800/80 px-3 py-1.5 rounded-lg w-fit border border-slate-700">
              <GraduationCap className="w-4 h-4" />
              <span>BSc Computer Science Project</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">Explore Stays</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/explore" className="hover:text-white transition-colors">All Properties</Link></li>
              <li><Link to="/explore?type=Villa" className="hover:text-white transition-colors">Luxury Villas</Link></li>
              <li><Link to="/explore?type=Hotel" className="hover:text-white transition-colors">Boutique Hotels</Link></li>
              <li><Link to="/explore?type=Resort" className="hover:text-white transition-colors">Beach Resorts</Link></li>
              <li><Link to="/explore?type=Apartment" className="hover:text-white transition-colors">City Apartments</Link></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">Hosting</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/host/add-property" className="hover:text-white transition-colors">List Your Property</Link></li>
              <li><Link to="/bookings" className="hover:text-white transition-colors">My Reservations</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About WonderLust</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          {/* Customer Support & Owner Info */}
          <div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-4">Customer Support</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <span className="block text-slate-500 font-semibold uppercase text-[10px]">Owner & Developer</span>
                <span className="text-slate-200 font-medium flex items-center gap-1.5 mt-0.5">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  Vishwakarma
                </span>
              </li>
              <li>
                <span className="block text-slate-500 font-semibold uppercase text-[10px]">Helpline</span>
                <a
                  href="tel:+918850422889"
                  className="text-slate-200 hover:text-indigo-400 font-medium flex items-center gap-1.5 mt-0.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  +91 8850422889
                </a>
              </li>
              <li>
                <span className="block text-slate-500 font-semibold uppercase text-[10px]">Email</span>
                <a
                  href="mailto:vanamika960@gmail.com"
                  className="text-slate-200 hover:text-indigo-400 font-medium flex items-center gap-1.5 mt-0.5 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  vanamika960@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WonderLust. All rights reserved. Built by Vishwakarma.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300">About</Link>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
            <a href="tel:+918850422889" className="hover:text-slate-300">+91 8850422889</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
