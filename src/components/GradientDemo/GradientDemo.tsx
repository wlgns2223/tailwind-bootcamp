import React from "react";

export default function GradientDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Gradient Demo (Tailwind CSS)
      </h2>

      {/* Linear Gradients */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Linear Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold">
            Horizontal
          </div>
          <div className="h-32 bg-gradient-to-b from-green-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-semibold">
            Vertical
          </div>
          <div className="h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
            Diagonal
          </div>
          <div className="h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-semibold">
            Multi-color
          </div>
        </div>
      </div>

      {/* Radial Gradients */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Radial Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="h-32 bg-radial from-yellow-400 via-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-semibold">
            Center
          </div>
          <div className="h-32 bg-radial from-green-400 via-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-semibold">
            Radial Green
          </div>
          <div className="h-32 bg-radial from-purple-400 via-violet-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold">
            Radial Purple
          </div>
        </div>
      </div>

      {/* Text Gradients */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Text Gradients</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent text-center py-4">
          Gradient Text Effect
        </div>
      </div>

      {/* Border Gradients */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Border Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500 p-1 rounded-lg">
            <div className="h-full bg-white dark:bg-gray-900 rounded flex items-center justify-center text-gray-900 dark:text-white font-semibold">
              Gradient Border
            </div>
          </div>
          <div className="h-32 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 p-1 rounded-lg">
            <div className="h-full bg-white dark:bg-gray-900 rounded flex items-center justify-center text-gray-900 dark:text-white font-semibold">
              Complex Border
            </div>
          </div>
        </div>
      </div>

      {/* Animated & Hover Effects */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Interactive Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x bg-[length:200%_200%] rounded-lg flex items-center justify-center text-white font-semibold">
            Animated Gradient
          </div>
          <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-500 rounded-lg flex items-center justify-center text-white font-semibold cursor-pointer">
            Hover Gradient
          </div>
        </div>
      </div>

      {/* Gradient Combinations */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Complex Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 rounded-lg flex items-center justify-center text-white font-semibold">
            With Opacity
          </div>
          <div className="h-32 bg-gradient-to-br from-green-400 to-blue-600 shadow-lg shadow-blue-500/50 rounded-lg flex items-center justify-center text-white font-semibold">
            With Shadow
          </div>
        </div>
      </div>
    </section>
  );
}
