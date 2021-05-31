import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Category from '../pages/Category';


function NavBar(){
    return (
      <BrowserRouter>

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

      <Switch>
          <Route exact path="/categories" component={Category}></Route>
      </Switch>
    </BrowserRouter>
      );
}

export default NavBar;