import React from 'react';
import '../sass/components/_FeaturedProductCard.scss';
import image from '../assets/dummy.png';

import ProductButton from './ProductButton';

function FeatureProductCard ({title, price, index}) {
    const featuredClass = (index % 2 == 0) ? 'even' : 'odd';
    return (
     <article className={`featured__card ${featuredClass}`} >
         <img className="featured__card-image" src={image} alt={title} />
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