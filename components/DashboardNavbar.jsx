'use client';

import { useState } from 'react';
import { Search, Menu, X, User, LogOut, Home, Mail, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';

export default function DashboardNavbar({ sidebarOpen, setSidebarOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Left Menu Bar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Center Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search projects or tasks..."
            className="w-full bg-gray-50 text-gray-900 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-200">
              <p className="text-gray-900 font-medium">John Doe</p>
              <p className="text-gray-600 text-sm">john.doe@example.com</p>
            </div>
            <Link href="/about" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
              <Home className="mr-3" size={16} />
              About
            </Link>
            <Link href="/contact" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
              <Mail className="mr-3" size={16} />
              Contact
            </Link>
            <Link href="/pricing" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors">
              <DollarSign className="mr-3" size={16} />
              Pricing
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              <LogOut className="mr-3" size={16} />
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}