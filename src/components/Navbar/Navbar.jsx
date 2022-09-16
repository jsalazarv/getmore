import './styles.scss';
import { useEffect, useState } from 'react';

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
    <nav className={colorChange ? 'navbar active' : 'navbar'}>
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
  );
};
