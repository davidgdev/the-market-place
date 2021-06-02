import React from 'react';
import '../sass/components/_FullNavbar.scss';

import NavBar from '../components/NavBar';
import Logo from '../components/Logo';

function FullNavbar () {
    return (
        <div className="navbar">
            <Logo/>
            <NavBar/>
        </div>
    )  
};

export default FullNavbar;