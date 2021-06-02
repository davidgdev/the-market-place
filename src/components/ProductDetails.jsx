import React from 'react';
import '../sass/components/_ProductDetails.scss';

import ProductButton from './ProductButton';


function ProductDescription ({name, description, price, quantity, seller}) {
    return (
     <section className="prodDetails">
            <p className="prodDetails__title">{name}</p>
            <p className="prodDetails__description">{description}</p>
            <div className="prodDetails__bottom">
                <div className="prodDetails__properties">
                    <p><span className="prodDetails__property">Seller:<br/></span> {seller}</p>
                    <p><span className="prodDetails__property">Available:<br/></span> {quantity} units</p>
                </div>
                <div className="prodDetails__buy">
                    <p><span className="prodDetails__property prodDetails__price ">Price:</span> $ {price}</p>
                    <ProductButton text="Buy Now" style="btn btn-secondary"/>
                </div>
            </div>
     </section>
    )
};

export default ProductDescription;