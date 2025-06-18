import React from "react";

export default function FlexDemo() {
  return (
    <section className="w-full p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Flex Examples</h2>
      <div className="flex space-x-4">
        <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
          Flex 1
        </div>
        <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
          Flex 1
        </div>
        <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded">
          Flex 1
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-6 h-40 bg-white dark:bg-gray-700 p-4 rounded">
        <div className="p-2 bg-indigo-500 text-white rounded">Item 1</div>
        <div className="p-2 bg-indigo-500 text-white rounded">Item 2</div>
        <div className="p-2 bg-indigo-500 text-white rounded">Item 3</div>
      </div>
    </section>
  );
}
