import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  ClipboardList, 
  CalendarDays, 
  Users, 
  Wrench, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  FileText,
  Sparkles
} from 'lucide-react';
import clsx from 'clsx';

const sidebarLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
  { name: 'Rental Enquiries', path: '/admin/rental-enquiries', icon: <ClipboardList size={20} /> },
  { name: 'Bookings', path: '/admin/bookings', icon: <FileText size={20} /> },
  { name: 'Calendar', path: '/admin/calendar', icon: <CalendarDays size={20} /> },
  { name: 'Detailing', path: '/admin/detailing', icon: <Sparkles size={20} /> },
  { name: 'Vehicles', path: '/admin/vehicles', icon: <Car size={20} /> },
  { name: 'Maintenance', path: '/admin/maintenance', icon: <Wrench size={20} /> },
  { name: 'Customers', path: '/admin/customers', icon: <Users size={20} /> },
  { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
];

export default function AdminLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-brand-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-brand-black text-brand-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:flex-shrink-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-6 border-b border-brand-gray/20 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tight text-brand-white">
              DriveCare <span className="text-brand-accent">Admin</span>
            </span>
            <button className="lg:hidden text-brand-gray hover:text-brand-white" onClick={() => setIsMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-brand-accent text-brand-white" 
                      : "text-brand-gray/80 hover:bg-brand-gray/10 hover:text-brand-white"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-brand-gray/20">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-sm font-medium text-brand-gray/80 hover:bg-brand-gray/10 hover:text-brand-white transition-colors"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header for Mobile */}
        <header className="bg-white shadow-sm lg:hidden border-b border-gray-200 flex items-center justify-between px-4 py-4">
          <span className="text-lg font-bold text-brand-black">DriveCare Admin</span>
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="text-brand-black hover:text-brand-accent"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
