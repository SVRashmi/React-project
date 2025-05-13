import React, { useState } from "react";
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)} // ✅ now defined
        />
      ))}
    </div>
  );
};



export default Accordion;
