import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Category from '../pages/Category';
import Categories from '../pages/Categories';
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
                  <Link to="/login" className="nav__item">
                    Login/Signup
                  </Link>
                </li>
              </ul>
              
          </nav>

          <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/seller" component={SellerProducts}></Route>
              <Route exact path="/categories/" component={Categories}></Route>
              <Route exact path="/categories/:cat" component={Category}></Route>
              <Route exact path="/products" component={Product}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/upload" component={SellerProductsUpload}></Route>
              <Route exact path="/update" component={SellerProductsUpdate}></Route>
            </Switch>
        </BrowserRouter>
      );
}

export default NavBar;