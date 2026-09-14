import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Compass, User, Menu, X, PlusCircle, CalendarCheck, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">
                WonderLust
              </span>
              <span className="text-[10px] uppercase font-semibold text-indigo-600 tracking-wider -mt-1">
                Hotel & Property Booking
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200 text-sm font-medium text-slate-600">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive('/') ? 'bg-white text-indigo-600 shadow-sm font-semibold' : 'hover:text-slate-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive('/explore') ? 'bg-white text-indigo-600 shadow-sm font-semibold' : 'hover:text-slate-900'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive('/about') ? 'bg-white text-indigo-600 shadow-sm font-semibold' : 'hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive('/contact') ? 'bg-white text-indigo-600 shadow-sm font-semibold' : 'hover:text-slate-900'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/host/add-property"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <PlusCircle className="w-4 h-4 text-indigo-500" />
              <span>Add Property</span>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/bookings"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive('/bookings')
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <CalendarCheck className="w-4 h-4 text-indigo-600" />
                  <span>My Bookings</span>
                </Link>

                <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-indigo-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{user?.name}</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    title="Sign Out"
                    className="p-2 rounded-full text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            to="/explore"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
          >
            Explore Properties
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/host/add-property"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-indigo-200 text-indigo-600 font-semibold text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              Add Property
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-sm"
                >
                  <User className="w-4 h-4 text-indigo-600" />
                  My Profile ({user?.name})
                </Link>
                <Link
                  to="/bookings"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold text-sm"
                >
                  <CalendarCheck className="w-4 h-4" />
                  My Bookings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-rose-50 text-rose-700 font-semibold text-sm cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm"
              >
                <User className="w-4 h-4" />
                Sign In / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
