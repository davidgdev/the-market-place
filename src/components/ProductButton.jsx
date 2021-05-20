import React from 'react';
import '../sass/components/_ProductButton.scss';

function ProductButton ({text, style}) {
    return (
     <button className={style}>{text}</button>
    )
};

export default ProductButton;