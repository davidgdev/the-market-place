import React from 'react';
import '../sass/components/_NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar(){
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
                  <Link to="/login" className="nav__item">
                    Login/Signup
                  </Link>
                </li>
              </ul>
          </nav>
      );
}

export default NavBar;