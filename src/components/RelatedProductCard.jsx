import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/_RelatedProductCard.scss';
import image from '../assets/dummy.png';

import ProductButton from './ProductButton';

function FeatureProductCard ({title, price, index}) {
    const featuredClass = (index % 2 == 0) ? 'even' : 'odd';
    return (
     <article className={`related__card ${featuredClass}`} >
         <img className="related__card-image" src={image} alt={title} />
         <div className="related__card-info">
            <p className="related__card-title">{title}</p>
            <div className="related__card-info-bottom">
                <div className="related__card-info-details">
                    <p>${price}</p>
                </div>
                <div className="related__card-button">
                <Link to="/products">
                    <ProductButton text="Buy Now" style="btn btn-secondary"/>

                </Link>
                </div>
            </div>
         </div>
         
     </article>
    )
};

export default FeatureProductCard;