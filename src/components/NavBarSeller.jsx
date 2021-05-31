import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import SellerProducts from '../pages/SellerProducts';
import SellerProductsUpload from '../pages/SellerProductsUpload';
import SellerProductsUpdate from '../pages/SellerProductsUpdate';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Home from '../pages/Home';


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
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/seller" component={SellerProducts}></Route>
          <Route exact path="/categories" component={Category}></Route>
          <Route exact path="/products" component={Product}></Route>
          <Route exact path="/upload" component={SellerProductsUpload}></Route>
          <Route exact path="/update" component={SellerProductsUpdate}></Route>
      </Switch>
    </BrowserRouter>
      );
}

export default NavBar;