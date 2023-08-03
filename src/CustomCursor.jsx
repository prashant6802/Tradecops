import React, { useState, useEffect } from 'react';
import './App.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX - 10, y: e.pageY - 10 });
    };

    const handleMouseClick = () => {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor${expand ? ' expand' : ''}`}
        style={{ top: position.y, left: position.x }}
      ></div>
      <div
        className={`cursor-border${expand ? ' expand' : ''}`}
        style={{ top: position.y, left: position.x }}
      ></div>
    </>
  );
};

export default CustomCursor;