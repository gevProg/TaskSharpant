import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Mail, Phone, AlertCircle, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                <Users className="h-6 w-6 mr-2" />
                <span className="font-medium">User Management</span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavLinks />
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleNav}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isNavOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isNavOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinks mobile />
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

function NavLinks({ mobile = true }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
    : "flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100";

  return (
    <>
      <Link to="/add" className={linkClass}>
        Add User
      </Link>
      <Link to="/email" className={linkClass}>
        <Mail className="h-4 w-4 mr-2" />
        Update Email
      </Link>
      <Link to="/phone" className={linkClass}>
        <Phone className="h-4 w-4 mr-2" />
        Update Phone
      </Link>
      <Link to="/allergies" className={linkClass}>
        <AlertCircle className="h-4 w-4 mr-2" />
        Update Allergies
      </Link>
    </>
  );
}

