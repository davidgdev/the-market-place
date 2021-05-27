import React from 'react';
import '../sass/components/_SideMenu.scss';

function SideMenu({category}){
    return (
      <nav className="sideMenu">
        <ul>
          <li className="sideMenu__nav"><a className="sideMenu__link" href="/seller">my products</a></li>
          <li className="sideMenu__nav"><a className="sideMenu__link" href="/upload">upload products</a></li>
        </ul>
      </nav>
    );
}

export default SideMenu;