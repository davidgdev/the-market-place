import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import '../sass/pages/_Login.scss';
import '../sass/components/_LoginForm.scss';

import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import NavBarBuyer from '../components/NavBarBuyer';



function Login(){
    return(
        <section className="login">
            <section id="login__header">
                <NavBar></NavBar>
            </section>
            
            <section id="login__side">
                <SideBar></SideBar>
            </section>

            <section id="login__body">
                <h1 className="login__title">Login</h1>
                <LoginForm btn_text_1="go shopping"></LoginForm>
                <div className="login__externals">
                    <BrowserRouter>
                        <Link to="/" className="login__password">Forgot password?</Link>
                        <Link to="/signup" className="login__signup">Create account</Link>
                    </BrowserRouter>
                </div>
            </section>
        </section>
    )
}

export default Login;

