import React from 'react';

const Card = ({ children }) => {
  return <div className="shadow-md rounded-lg p-4 bg-white">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

// Export both components from the same file
export { Card, CardContent };
