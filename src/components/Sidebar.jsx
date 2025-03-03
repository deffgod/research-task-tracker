import React from 'react';
import { FiHome, FiCalendar, FiCheckCircle, FiList, FiBarChart2, FiSettings } from 'react-icons/fi';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'today', label: 'Today', icon: <FiCalendar /> },
    { id: 'upcoming', label: 'Upcoming', icon: <FiList /> },
    { id: 'completed', label: 'Completed', icon: <FiCheckCircle /> },
    { id: 'all', label: 'All Tasks', icon: <FiBarChart2 /> },
  ];
  
  return (
    <aside className="w-64 p-6 hidden md:block">
      <div className="glass h-full p-6 rounded-2xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-purple-400">ResearchTrack</h2>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-3 rounded-lg transition ${
                    activeTab === item.id 
                      ? 'bg-purple-600 bg-opacity-70 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-gray-700 mt-8">
          <button className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:bg-opacity-50 transition">
            <FiSettings className="mr-3" />
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;