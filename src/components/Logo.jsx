import React from 'react';
import logo from '../assets/img/logo.svg';
import '../sass/components/_Logo.scss'

function Logo(){
    return(
        <section className="logo">
            <a href="/" className="">
                <h1>
                    <span className="logo__title-black">Market</span>
                    <span className="logo__title-yellow">Place</span>
                    <img className="logo__img" src={logo} alt="Logo cart shopping"></img>
                </h1>   
            </a>
               
        </section>
    );
}

export default Logo;