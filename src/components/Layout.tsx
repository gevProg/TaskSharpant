import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Mail, Phone, AlertCircle } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                <Users className="h-6 w-6 mr-2" />
                <span className="font-medium">User Management</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/add"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Add User
              </Link>
              <Link
                to="/email"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <Mail className="h-4 w-4 mr-2" />
                Update Email
              </Link>
              <Link
                to="/phone"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                Update Phone
              </Link>
              <Link
                to="/allergies"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                Update Allergies
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}