import React from 'react';
import '../sass/components/_HorizontalCard.scss';
import image from '../assets/dummy.png';

import ProductButton from './ProductButton';

function HorizontalCard (props) {
    return (
     <article className="hcard">
         <img className="hcard__image" src={image} alt="Product image" />
         <div className="hcard__info">
            <p className="hcard__title">blue notebook</p>
            <p className="hcard__description">Save all your notes in this amazing notebook. 
                It has 100 blank pages to be filled with your stories.
            </p>
            <div className="hcard__info-bottom">
                <div className="hcard__details">
                    <p><span className="hcard__property">Price:</span> $10.00</p>
                    <p><span className="hcard__property">Quantity:</span> 1</p>
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