"use client"
 
//import React, { useState } from 'react';
import React, { useState } from 'react';

export default function TaskText({text}) {
   const [isExpanded, setIsExpanded] = useState(false);

//   const handleClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="TaskText">
//       <button onClick={handleClick}>{isExpanded ? 'Свернуть' : 'Развернуть задание'}</button>
//       {text.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );

const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="TaskText">
      <button onClick={handleClick}>{isExpanded ? 'Свернуть' : 'Развернуть задание'}</button>
      {isExpanded && text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );

}