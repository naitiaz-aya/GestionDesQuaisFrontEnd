import React from 'react';
import { Link } from "react-router-dom";

export  function Navigation() {
  return <header className="flex justify-between items-center py-4 md:py-8">
  <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
    <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M96 0V47L48 94H0V47L48 0H96Z" />
    </svg>
    TangerMed
  </a>
  <nav className="hidden lg:flex gap-12">
  <Link
          to="/"
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          <span>Home</span>
        </Link>
        <Link
          to="/register"  
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          <span>Reserve</span>
        </Link>
        <Link
          to="/users"
          className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >
          <span>Users</span>
        </Link>
  </nav>
 
  <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
    <a href="#" className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Logout</a>
  </div>

  <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>

    Menu
  </button>
</header>;
}