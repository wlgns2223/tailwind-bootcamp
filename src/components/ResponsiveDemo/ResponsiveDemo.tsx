import React from "react";

export default function ResponsiveDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Responsive Demo (Tailwind CSS)
      </h2>

      {/* Responsive Grid */}
      <h3 className="text-lg font-medium mb-2">
        Responsive Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 1
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 2
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 3
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 4
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 5
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-center">
          Item 6
        </div>
      </div>

      {/* Responsive Text */}
      <h3 className="text-lg font-medium mb-2">Responsive Text Size</h3>
      <div className="text-base md:text-xl lg:text-2xl p-4 bg-purple-200 dark:bg-purple-800 rounded mb-4">
        This text grows: text-base → text-xl → text-2xl
      </div>

      {/* Responsive Navigation */}
      <h3 className="text-lg font-medium mb-2">Responsive Navigation</h3>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 p-4 bg-blue-200 dark:bg-blue-800 rounded mb-4">
        <a
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded text-center"
        >
          Home
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded text-center"
        >
          About
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded text-center"
        >
          Services
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-blue-600 text-white rounded text-center"
        >
          Contact
        </a>
      </nav>

      {/* Conditional Display */}
      <h3 className="text-lg font-medium mb-2">Conditional Display</h3>
      <div className="block lg:hidden">
        📱 Mobile & Tablet Only (block lg:hidden)
      </div>
      <div className="hidden lg:block">🖥️ Desktop Only (hidden lg:block)</div>
    </section>
  );
}
