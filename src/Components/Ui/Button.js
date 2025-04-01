import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-orange-500 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export default Button;
