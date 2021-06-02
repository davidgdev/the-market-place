import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/_RelatedProductCard.scss';
import ProductButton from './ProductButton';

function RelatedProductCard ({name, price, image, id}) {
    const featuredClass = (id % 2 == 0) ? 'odd' : 'even';
    return (
     <article className={`related__card ${featuredClass}`} >
        <Link to="/products">
            <img className="related__card-image" src={image} alt={name} />
        </Link>
         <div className="related__card-info">
            <p className="related__card-title">{name}</p>
            <div className="related__card-info-bottom">
                <div className="related__card-info-details">
                    <p>${price}</p>
                </div>
                <div className="related__card-button">
                    <ProductButton text="Buy Now" style="btn btn-secondary"/>
                </div>
            </div>
         </div>
         
     </article>
    )
};

export default RelatedProductCard;