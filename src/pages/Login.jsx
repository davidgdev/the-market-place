import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/pages/_Login.scss';

import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import SideBar from '../components/SideBar';

function Login(){
    return(
        <section className="login">
            <section id="login__header">
                <NavBar/>
            </section>
            <section id="login__side">
                <SideBar/>
            </section>
            <section id="login__body">
                <h1 className="login__title">Login</h1>
                <LoginForm btn_text_1="go shopping"></LoginForm>
                <div className="login__externals">
                    <Link to="/" className="login__password">Forgot password?</Link>
                    <Link to="/signup" className="login__signup">Create account</Link>
                </div>
            </section>
        </section>
    )
}

export default Login;

