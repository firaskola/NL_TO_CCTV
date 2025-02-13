import { useState } from "react";
import { Home, BarChart2, Calendar, Clock, Bell, Settings, LogOut, MessageSquare, Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen ${isOpen ? "w-64" : "w-24"} bg-gray-900 text-white flex flex-col justify-between p-4 fixed left-0 top-0 transition-all duration-300`}>
      
      {/* Top Section - Logo & Toggle Button */}
      <div className="flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <h1 className="text-s font-bold">ABCD</h1>
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <Menu />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 mt-8">
        <NavItem icon={Home} label="Home" isOpen={isOpen} active />
        <NavItem icon={BarChart2} label="Dashboard" isOpen={isOpen} />
        <NavItem icon={Calendar} label="Analytics" isOpen={isOpen} />
        <NavItem icon={Clock} label="Schedules" isOpen={isOpen} hasNotification />
        <NavItem icon={MessageSquare} label="History" isOpen={isOpen} />
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-4">
        <NavItem icon={Bell} label="Notifications" isOpen={isOpen} hasNotification />
        <NavItem icon={Settings} label="Settings" isOpen={isOpen} />
        <NavItem icon={LogOut} label="Logout" isOpen={isOpen} />

        {/* User Profile - Always visible */}
        <div className="flex items-center p-2 bg-gray-800 rounded-lg mt-4">
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-semibold">Sujal MH</p>
              <p className="text-xs text-gray-400">sujalmh09@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Sidebar Item Component */
const NavItem = ({ icon: Icon, label, active, hasNotification, isOpen }) => (
  <div className={`flex items-center ${isOpen ? "space-x-3" : "justify-center"} p-2 rounded-lg cursor-pointer ${
    active ? "bg-gray-700" : "hover:bg-gray-800"
  }`}>
    <Icon className="w-5 h-5" />
    {isOpen && <span className="flex-1">{label}</span>}
    {hasNotification && isOpen && <span className="text-red-500 text-xs">●</span>}
  </div>
);

export default Sidebar;
