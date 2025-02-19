import React from "react";

const EliteClubLanding = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-4">
      <div className="card w-full max-w-sm p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
        <div className="card-body text-center">
          <img 
            src="/Clubelite Logo - BigCommerce Store Logo with Transparent Background (2).png" 
            alt="Club-elite Logo" 
            className="mx-auto mb-6 w-72 filter invert brightness-90 contrast-110 opacity-90"
          />
          <h2 className="text-xl font-bold text-gray-200">Welcome to Elite Club</h2>
          <p className="mb-4 text-gray-400 text-sm">Your ultimate football team dashboard to manage everything effortlessly.</p>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-300">Email</label>
              <input type="email" className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 text-sm" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-300">Password</label>
              <input type="password" className="input input-bordered w-full bg-gray-800 border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 text-sm" required />
            </div>
            <button type="submit" className="btn w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 rounded-lg shadow-md text-sm transition-all">
              Login
            </button>
          </form>
          <div className="mt-4 text-sm">
            <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteClubLanding;
