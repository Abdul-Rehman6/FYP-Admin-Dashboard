import React from 'react';
import { 
  ShoppingCart, 
  Users, 
  Award, 
  BarChart2, 
  CreditCard, 
  Home,
  ChevronLeft
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, isMobile, currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'orders', label: 'Manage Orders', icon: <ShoppingCart size={20} /> },
    { id: 'users', label: 'Manage Users', icon: <Users size={20} /> },
    { id: 'brands', label: 'Manage Brands', icon: <Award size={20} /> },
    { id: 'reports', label: 'View Reports', icon: <BarChart2 size={20} /> },
    { id: 'subscriptions', label: 'Manage Subscriptions', icon: <CreditCard size={20} /> },
  ];

  // If sidebar is closed and mobile, don't render the component
  if (isMobile && !isOpen) {
    return null;
  }

  // Handle navigation click
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isMobile ? 'fixed' : 'relative'
        } flex flex-col w-64 h-screen bg-slate-800 text-white shadow-lg transition-transform duration-300 ease-in-out z-30`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-slate-700">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          {isMobile && (
            <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-slate-700">
              <ChevronLeft size={24} />
            </button>
          )}
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-colors duration-150 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center text-sm">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="font-medium">AD</span>
            </div>
            <div>
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-slate-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;