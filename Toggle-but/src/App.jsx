import React, { useState } from 'react';

export default function ThemeToggleCard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div
      className={`min-h-screen  m-0 w-7xlflex items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'
        }`}
    >
      <div
        className={`p-8 rounded-xl shadow-xl transition-colors duration-500 ${isDarkMode
            ? 'bg-white text-black'
            : 'bg-black text-white'
          }`}
      >
        <p className="text-2xl mb-4">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
        <p>This is a themed card. Toggle the theme to see changes.</p>
        <button
          onClick={toggleTheme}
          className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
}
