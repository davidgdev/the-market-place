import React from 'react';
import '../sass/components/_NavBar.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import logo from '../assets/img/logo.svg';


function NavBar(){
    return (
        <BrowserRouter>
          <div>
          <header className="header">
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/" className="">
                    <h1>
                      <span className="nav__title-black">Market</span>
                      <span className="nav__title-yellow">Place</span>
                      <img className="nav__logo" src={logo} alt="Logo cart shopping"></img>
                    </h1>
                  </Link>
                </li>
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
                    Login/Sign up
                  </Link>
                </li>
              </ul>
              
            </nav>
          </header>
    
          <div>
            <Switch> 
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Signup}></Route>
            </Switch>
          </div>
        </div>
        </BrowserRouter>
      );
}

export default NavBar;