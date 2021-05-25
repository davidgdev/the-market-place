import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import '../sass/components/_Login.scss';
import Signup from './Signup';

function Login(){
    return(
        <section className="login">
            <h1 className="login__title">Login</h1>

            <form className="login__form">
                <label className="form__label">email</label>
                <input id="email" type="email" className="form__input"/>
                <label className="form__label">password</label>
                <input id="password" type="password" className="form__input"/>
                <button type="submit" className="form__button">go shopping</button>
            </form>

            <BrowserRouter>
                <Link to="/" className="login__password">Forgot password?</Link>
                <Link to="/signup" className="login__signup">Create account</Link>
            </BrowserRouter>

        </section>
    )
}

export default Login;