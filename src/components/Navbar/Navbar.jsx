import './styles.scss';
import React, { useEffect, useState } from 'react';
import { PromotionalBar } from '../PromotionalBar/index.jsx';

export const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      <nav className={colorChange ? 'navbar active' : 'navbar'}>
        <PromotionalBar />
        <ul className="menu">
          <li className="menu-item">
            <a className="item" href="#">
              Productos
            </a>
          </li>
          <li className="menu-item">
            <a className="item" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
