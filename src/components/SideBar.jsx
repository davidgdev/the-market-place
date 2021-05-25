import React from 'react';
import '../sass/components/_SideBar.scss';
import logo from '../assets/img/logo.svg'

function SideBar(){
    return (
        <section className="sideBar">
            <img className="sideBar__logo" src={logo} alt="Logo cart shopping"></img>
            <h1 className="sideBar__title">
                <span className="sideBar__title-black">Market</span>
                <span className="sideBar__title-white">Place</span>
            </h1>
            
            <h3 className="sideBar__subtitle">Your Place to buy</h3>
        </section>
    );
}

export default SideBar;