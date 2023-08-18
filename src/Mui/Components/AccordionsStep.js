import React, { useState } from "react";

const AccordionsStep = ({ heading, paragraph }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-4 border p-2  rounded-2xl">
      <h2
        className="cursor-pointer flex justify-between"
        onClick={toggleAccordion}
      >
        {heading}
        <span className="ml-2">{expanded ? "▲" : "▼"}</span>
      </h2>
      {expanded && <p>{paragraph}</p>}
    </div>
  );
};

export default AccordionsStep;
