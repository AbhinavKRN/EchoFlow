import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const { theme } = useTheme();
  
  return (
    <nav className={`bg-white dark:bg-dark-surface border-b dark:border-dark-border shadow-sm ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Voice Clone App
            </h1>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



