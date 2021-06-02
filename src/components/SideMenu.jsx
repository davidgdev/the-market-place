import React from 'react';
import '../sass/components/_SideMenu.scss';
import { Link } from 'react-router-dom';

function SideMenu({category}){
    return (
      <nav id="side-menu" className="sideMenu">
        <ul>
          <li className="sideMenu__nav"><Link className="sideMenu__link" to="/seller">my products</Link></li>
          <li className="sideMenu__nav"><Link className="sideMenu__link" to="/upload">upload products</Link></li>
        </ul>
      </nav>
    );
}

export default SideMenu;