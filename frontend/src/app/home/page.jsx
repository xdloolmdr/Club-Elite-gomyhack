import React from "react";

const EliteClubHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 bg-gray-900 shadow-md">
        <img 
          src="/Clubelite Logo - BigCommerce Store Logo with Transparent Background (2).png" 
          alt="Club-elite Logo" 
          className="w-30 h-16 filter invert brightness-90 contrast-110 opacity-90"
        />
       
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl font-extrabold text-white mb-4">Welcome to Elite-Club</h1>
        <p className="text-gray-300 max-w-md">The ultimate football team dashboard to manage teams, track performance, and stay ahead in the game.</p>
        <a href="/login" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-white font-bold">Get Started</a>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold text-blue-400">Manage Teams</h3>
          <p className="text-gray-300 text-sm mt-2">Create and organize your football teams efficiently.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold text-blue-400">Track Performance</h3>
          <p className="text-gray-300 text-sm mt-2">Monitor player stats and team progress.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-bold text-blue-400">Stay Updated</h3>
          <p className="text-gray-300 text-sm mt-2">Get real-time updates and notifications.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">© 2025 Elite Club. All rights reserved.</footer>
    </div>
  );
};

export default EliteClubHome;
