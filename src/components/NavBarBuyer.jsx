import React from 'react';
import '../sass/components/_NavBar.scss';
import { Link } from 'react-router-dom';

function NavBarBuyer(){
    return (
      <nav className="nav">
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="nav__item">
                Categories
              </Link>
            </li>
            <li>
              <p className="nav__item">
                User
              </p>
            </li>
          </ul>
      </nav>
      );
}

export default NavBarBuyer