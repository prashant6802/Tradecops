import React, { useState } from 'react';

const Hamburgermenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={handleClick}>
        <div className="menu-btn__burger"></div>
      </div>
    </>
  );
};

export default Hamburgermenu;
