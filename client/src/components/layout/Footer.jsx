import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-dark-surface border-t dark:border-dark-border mt-auto">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Voice Clone App. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;