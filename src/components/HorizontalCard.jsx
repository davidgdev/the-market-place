import React from 'react';
import '../sass/components/_HorizontalCard.scss';
import image from '../assets/dummy.png';

import ProductButton from './ProductButton';

function HorizontalCard ({title, description, price, quantity}) {
    return (
     <article className="hcard">
         <img className="hcard__image" src={image} alt={title} />
         <div className="hcard__info">
            <p className="hcard__title">{title}</p>
            <p className="hcard__description">{description}</p>
            <div className="hcard__info-bottom">
                <div className="hcard__details">
                    <p><span className="hcard__property">Price:</span> ${price}</p>
                    <p><span className="hcard__property">Quantity:</span> {quantity}</p>
                </div>
                <div className="hcard__buttons">
                    <ProductButton text="Edit" style="btn btn-primary"/>
                    <ProductButton text="Delete" style="btn btn-secondary"/>
                </div>
            </div>
            
            
         </div>
         
     </article>
    )
};

export default HorizontalCard;