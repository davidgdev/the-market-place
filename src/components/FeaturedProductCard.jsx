import React from 'react';
import { Link } from 'react-router-dom'

import '../sass/components/_FeaturedProductCard.scss';

import ProductButton from './ProductButton';

function FeatureProductCard ({title, price, image, index}) {
    const featuredClass = (index % 2 == 0) ? 'odd' : 'even';
    return (
     <article className={`featured__card ${featuredClass}`} >
        <Link to="/products">
            <img className="featured__card-image" src={image} alt={title} />
        </Link>
         <div className="featured__card-info">
            <p className="featured__card-title">{title}</p>
            <div className="featured__card-info-bottom">
                <div className="featured__card-info-details">
                    <p>${price}</p>
                </div>
                <div className="featured__card-button">
                    <ProductButton text="Buy Now" style="btn btn-secondary"/>        
                </div>
            </div>
         </div>
         
     </article>
    )
};

export default FeatureProductCard;