import React from "react";

export default function StyleDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Style Demo (Tailwind CSS)</h2>

      {/* Font sizes */}
      <div className="text-2xl">Large font (text-2xl)</div>
      <div className="text-xl">Medium font (text-xl)</div>
      <div className="text-base">Small font (text-base)</div>

      {/* Font weights */}
      <div className="font-light">Light weight (font-light)</div>
      <div className="font-bold">Bold weight (font-bold)</div>

      {/* Text alignment */}
      <div className="text-left">Left aligned text</div>
      <div className="text-center">Center aligned text</div>
      <div className="text-right">Right aligned text</div>

      {/* Text color */}
      <div className="text-blue-700">Primary text color (text-blue-700)</div>

      {/* Background color */}
      <div className="bg-blue-200 p-2 rounded">
        Highlighted background (bg-blue-200)
      </div>

      {/* Borders */}
      <div className="border-2 border-blue-600 p-2 rounded">
        Border example (border-2 border-blue-600)
      </div>

      {/* Border radius */}
      <div className="border border-gray-400 p-2 rounded-xl">
        Rounded example (rounded-xl)
      </div>
    </section>
  );
}
