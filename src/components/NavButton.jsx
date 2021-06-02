import React from 'react';
import '../sass/components/_ProductButton.scss';

import { Link } from 'react-router-dom';


function NavButton ({text, style, link}) {
    return (
     <Link className={style} to={link}>{text}</Link>
    )
};

export default NavButton;