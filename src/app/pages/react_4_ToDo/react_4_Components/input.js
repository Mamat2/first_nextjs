
import React, { useState } from 'react';

export default function  Input  ({ onAdd }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    const newItem = {
      text,
      completed: false,
    };
    onAdd(newItem);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        добавить
      </button>
    </div>
  );
};


  
 