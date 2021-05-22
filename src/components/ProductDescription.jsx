import React from 'react';
import '../sass/components/_ProductDescription.scss';

import Photo from './Photo';
import PhotoReel from './PhotoReel';
import ProductButton from './ProductButton';


function ProductDescription ({title, description, price, quantity}) {
    return (
     <section className="prodDesc">
        <PhotoReel photos=""/>
        <Photo size="photo__img photo__img--large"/>
        <div className="prodDesc__info">
            <p className="prodDesc__info-title">blue notebook</p>
            <p className="prodDesc__info-description">Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories.</p>
            <div className="prodDesc__info-bottom">
                <div className="prodDesc__info-properties">
                    <p><span className="prodDesc__details-property">Seller:<br/></span> Fulanito Detal</p>
                    <p><span className="prodDesc__details-property">Available:<br/></span> 83 units</p>
                </div>
                <div className="prodDesc__info-buy">
                    <p><span className="prodDesc__details-property">Price:</span> $ 10.00</p>
                    <ProductButton text="Buy Now" style="btn btn-secondary"/>
                </div>
            </div>
         </div>
     </section>
    )
};

export default ProductDescription;