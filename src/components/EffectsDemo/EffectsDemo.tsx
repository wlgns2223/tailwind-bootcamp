import React from "react";

export default function EffectsDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">
        Effects Demo (Tailwind CSS)
      </h2>

      {/* Box Shadow Examples */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Box Shadow</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-sm">
            Small
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-md">
            Medium
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-2xl">
            Large
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto shadow-lg shadow-blue-500/50">
            Colored
          </div>
        </div>
      </div>

      {/* Opacity Examples */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Opacity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-25">
            25%
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-50">
            50%
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-75">
            75%
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto opacity-100">
            100%
          </div>
        </div>
      </div>

      {/* Scale Examples */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Scale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto scale-75">
            75%
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto scale-100">
            100%
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto scale-125">
            125%
          </div>
        </div>
      </div>

      {/* Rotate Examples */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Rotate</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto rotate-0">
            0°
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto rotate-45">
            45°
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto rotate-90">
            90°
          </div>
        </div>
      </div>

      {/* Translate Examples */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Translate</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto translate-x-5">
            X: 20px
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto -translate-y-5">
            Y: -20px
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto translate-x-5 -translate-y-5">
            X&Y
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">
          Hover Effects (hover to see)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:scale-110 transition-transform duration-300">
            Scale
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:shadow-2xl transition-shadow duration-300">
            Shadow
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto hover:rotate-180 transition-transform duration-300">
            Rotate
          </div>
          <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded mx-auto scale-90 rotate-12 opacity-80 shadow-md hover:scale-110 hover:-rotate-12 hover:opacity-100 hover:shadow-2xl transition-all duration-300">
            Combined
          </div>
        </div>
      </div>
    </section>
  );
}
