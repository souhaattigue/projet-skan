import React from 'react';
function WelcomeMessage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight sm:text-5xl">
          Welcome to Our Website!
        </h1>
        <p className="mt-4 text-lg text-gray-5000">
          this is a site supposed to be for e commerce purposes 
        </p>
      </div>
    </div>
  );
}
export default WelcomeMessage;