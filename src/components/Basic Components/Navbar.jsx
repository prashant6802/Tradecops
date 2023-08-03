import React, { useEffect } from 'react';
import TradeCops from "./images/TradeCops.svg";

const Navbar2 = () => {
  useEffect(() => {
    const closeBtn = document.getElementById('btn');
    const sidebar = document.querySelector('.sidebar');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange();
    });

    return () => {
      closeBtn.removeEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuBtnChange();
      });
    };
  }, []);

  function menuBtnChange() {
    const closeBtn = document.getElementById('btn');
    const sidebar = document.querySelector('.sidebar');

    if (sidebar.classList.contains('open')) {
      closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    } else {
      closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    }
  }

  return (
    <>

<div className='navbar'>
      <div className="logo">
        <img src={TradeCops} alt="" width=""/>
      </div>
      <div className="navitems">
        <div className="items">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
        </div>
        <div className='loginbutton'><button>Log In</button></div>
      </div>
</div>


      <div className="sidebar">
        <div className="logo-details">
          <div className="logo_name">
            <img src={TradeCops} alt="TradeCops" width={"70%"} height={"50%"} />
          </div>
          <div className="logoicon">
            <i className="bx bx-menu" id="btn"></i>
          </div>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">
              <span className="links_name">Home</span>
            </a>
          </li>

          <li>
            <a href="/about">
              <span className="links_name">About Us</span>
            </a>
          </li>

          <li>
            <a href="/services">
              <span className="links_name">Services</span>
            </a>
          </li>

          <li>
            <a href="/contact">
              <span className="links_name">Contact Us</span>
            </a>
          </li>

          <li>
            <a href="/blogs">
              <span className="links_name">Blogs</span>
            </a>
          </li>

          <li className='loginbuttonmobile'>
            <a href="/">
              <span className="links_name_login">Log In</span>
            </a>
          </li>
        </ul>
      </div>
      
    </>
  );
};

export default Navbar2;
