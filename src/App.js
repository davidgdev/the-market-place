import React from 'react';
import './sass/App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Category from './pages/Category';
import Categories from './pages/Categories';
import Product from './pages/Product';
import SellerProducts from './pages/SellerProducts';
import SellerProductsUpload from './pages/SellerProductsUpload';
import SellerProductsUpdate from './pages/SellerProductsUpdate';

const ModalContext = React.createContext();

function App() {

return(
  <ModalContext.Provider value={"modal-hidden"} >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/seller" component={SellerProducts}></Route>
        <Route exact path="/categories" component={Categories}></Route>
        <Route exact path="/categories/:cat" component={Category}></Route>
        <Route exact path="/products/:id" component={Product}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/upload" component={SellerProductsUpload}></Route>
        <Route exact path="/update/:id" component={SellerProductsUpdate}></Route>
      </Switch>
    </BrowserRouter>
  </ModalContext.Provider>
  )
}

export default App;