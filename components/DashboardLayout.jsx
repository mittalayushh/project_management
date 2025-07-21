'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardNavbar from './DashboardNavbar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
// import { app } from '../lib/utils';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-900">Loading...</div>
      </div>
    );
  }

  // Pass user to DashboardNavbar and children
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <DashboardNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} user={user} />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <main className="flex-1 p-6">
          {children && typeof children === 'function' ? children({ user }) :
            children && children.props ?
              // If children is a React element, clone and inject user prop
              (Array.isArray(children)
                ? children.map(child => child && child.props ? { ...child, props: { ...child.props, user } } : child)
                : { ...children, props: { ...children.props, user } })
            : children}
        </main>
      </div>
    </div>
  );
}