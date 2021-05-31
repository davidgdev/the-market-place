import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';



import SellerProducts from '../pages/SellerProducts';
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
              <Link to="/seller" className="nav__item">
                My Products
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
          <Route exact path="/seller" component={SellerProducts}></Route>
          <Route exact path="/categories" component={Category}></Route>
      </Switch>
    </BrowserRouter>
      );
}

export default NavBar;