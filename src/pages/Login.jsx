import React from 'react';
import { NavLink} from 'react-router-dom';
import '../sass/pages/_Login.scss';

import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';



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
            </section>
        </section>
    )
}

export default Login;

