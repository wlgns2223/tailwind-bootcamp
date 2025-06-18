import React from "react";

export default function GridDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Grid Examples</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-gray-700 rounded">Grid 1</div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded">Grid 2</div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded">Grid 3</div>
        <div className="col-span-2 p-4 bg-white dark:bg-gray-700 rounded">
          Span 2 Columns
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded">Grid 5</div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded">Grid 6</div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 mt-6">
        <div className="row-span-2 p-4 bg-indigo-500 text-white rounded">
          Row Span 2
        </div>
        <div className="p-4 bg-indigo-500 text-white rounded">Item 2</div>
        <div className="p-4 bg-indigo-500 text-white rounded">Item 3</div>
      </div>
    </section>
  );
}
