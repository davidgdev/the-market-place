import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/pages/_Login.scss';

import SignupForm from '../components/SignupForm';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';



function Signup(){
    return(
        <section className="login">
            <section id="login__header">
                <NavBar/>
            </section>
            
            <section id="login__side">
                <SideBar/>
            </section>
            <section id="login__body">
                <h1 className="login__title">Sign up</h1>
                <SignupForm />
            </section>
            <div className="login__externals">
                <Link to="/login" className="login__signup">Already have an account? Sign In</Link>
            </div>
        </section>
    )
}

export default Signup;

