import React from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      <h5>{title}</h5>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="accordion-content">{content}</div>}
  </div>
);

export default AccordionItem;
