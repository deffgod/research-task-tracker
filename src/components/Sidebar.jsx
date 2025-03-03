import React from 'react';
import { FiCalendar, FiClock, FiCheckCircle, FiBarChart2, FiFolder, FiHelpCircle, FiLayout } from 'react-icons/fi';

const Sidebar = ({ activeTab, setActiveTab, onHelpClick, onUIExamplesClick }) => {
  const navItems = [
    { id: 'today', label: 'Today', icon: <FiCalendar /> },
    { id: 'upcoming', label: 'Upcoming', icon: <FiClock /> },
    { id: 'completed', label: 'Completed', icon: <FiCheckCircle /> },
    { id: 'all', label: 'All Tasks', icon: <FiBarChart2 /> },
  ];
  
  const categories = [
    { id: 'literature', label: 'Literature Review' },
    { id: 'data', label: 'Data Collection' },
    { id: 'analysis', label: 'Data Analysis' },
    { id: 'writing', label: 'Writing' },
  ];
  
  return (
    <aside className="w-64 flex-shrink-0 border-r border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-800 p-6 hidden md:block">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-brand-600 dark:text-brand-500 mb-1">
          Research Tracker
        </h3>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          Organize your research work
        </p>
      </div>
      
      <nav className="mb-8">
        <h4 className="text-xs uppercase font-semibold text-surface-500 dark:text-surface-400 mb-3">
          Tasks
        </h4>
        <ul className="space-y-1">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`w-full text-left px-4 py-2 rounded-once-lg flex items-center transition
                  ${activeTab === item.id 
                    ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-500' 
                    : 'text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800'
                  }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mb-8">
        <h4 className="text-xs uppercase font-semibold text-surface-500 dark:text-surface-400 mb-3">
          Categories
        </h4>
        <ul className="space-y-1">
          {categories.map(category => (
            <li key={category.id} className="flex items-center px-4 py-2 text-surface-700 dark:text-surface-300">
              <FiFolder className="mr-3 text-surface-400 dark:text-surface-500" />
              {category.label}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto pt-4 border-t border-surface-200 dark:border-surface-800 flex flex-col space-y-2">
        <button
          onClick={onHelpClick}
          className="w-full text-left px-4 py-2 rounded-once-lg flex items-center transition text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800"
        >
          <FiHelpCircle className="mr-3 text-brand-500" />
          Help Center
        </button>
        
        <button
          onClick={onUIExamplesClick}
          className="w-full text-left px-4 py-2 rounded-once-lg flex items-center transition text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800"
        >
          <FiLayout className="mr-3 text-purple-500" />
          UI Examples
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;