import React from 'react';
import '../sass/components/_ProductListCard.scss';
import image from '../assets/dummy.png';

import ProductButton from './ProductButton';
import NavButton from './NavButton';

function ProductListCard ({title, description, price, quantity, btn_text_1, btn_text_2, seller, category, buttonLink}) {
    return (
     <article className="hcard">
         <img className="hcard__image" src={image} alt={title} />
         <div className="hcard__info">
            <p className="hcard__title">{title}</p>
            <p className="hcard__description">{description}</p>
            <div className="hcard__info-bottom">
                <div className={seller}>
                    <p><span className="hcard__property">Price:</span> ${price}</p>
                    <p><span className="hcard__property">Quantity:</span> {quantity}</p>
                </div>
                <div className={category}>
                    <p className="hcard__price"><span className="hcard__property">Price:</span> $ {price}</p>
                </div>
                <div className="hcard__buttons">
                    <NavButton link={buttonLink} text={btn_text_1} style="btn btn-primary"/>
                    <ProductButton text={btn_text_2} style="btn btn-secondary" type="open-modal"/>
                </div>
            </div>
         </div>         
     </article>
    )
};

export default ProductListCard;