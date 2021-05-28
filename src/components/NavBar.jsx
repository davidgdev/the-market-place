import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import logo from '../assets/img/logo.svg';

import SellerProducts from '../pages/SellerProducts';
import SellerProductsUpload from '../pages/SellerProductsUpload';
import SellerProductsUpdate from '../pages/SellerProductsUpdate';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Home from '../pages/Home';


function NavBar(){
    return (
        <BrowserRouter>
          <div>
          <header className="header">
            <nav className="nav">
              <ul className="nav__brand">
                <li>
                  <Link to="/" className="">
                    <h1>
                      <span className="nav__title-black">Market</span>
                      <span className="nav__title-yellow">Place</span>
                      <img className="nav__logo" src={logo} alt="Logo cart shopping"></img>
                    </h1>
                  </Link>
                </li>
              </ul>
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
                  <Link to="/login" className="nav__item">
                    Login/Signup
                  </Link>
                </li>
              </ul>
              
            </nav>
          </header>
    
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/seller" component={SellerProducts}></Route>
              <Route exact path="/categories" component={Category}></Route>
              <Route exact path="/products" component={Product}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/upload" component={SellerProductsUpload}></Route>
              <Route exact path="/update" component={SellerProductsUpdate}></Route>
            </Switch>
          </div>
        </div>
        </BrowserRouter>
      );
}

export default NavBar;