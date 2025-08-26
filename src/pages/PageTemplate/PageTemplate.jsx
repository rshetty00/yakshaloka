// src/pages/PageTemplate/PageTemplate.jsx
import React from 'react';

const PageTemplate = ({ title, children }) => {
  return (
    <div className="flex-1 p-6 md:p-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        {title}
      </h1>
      <div className="max-w-5xl mx-auto text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;