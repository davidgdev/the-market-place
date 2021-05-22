import React from 'react';
import '../sass/components/_ProductDescription.scss';

import Photo from './Photo';
import PhotoReel from './PhotoReel';
import ProductDetails from './ProductDetails';


function ProductDescription ({title, description, price, quantity}) {
    return (
     <section className="prodDesc">
        <PhotoReel photos=""/>
        <Photo size="photo__img photo__img--large" source=""/>
        <ProductDetails title="blue notebook" description="Save all your notes in this amazing notebook. 
                It has 100 blank pages to be filled with your stories." price="10.00" quantity="5" seller="Fulanito Detal"/>
     </section>
    )
};

export default ProductDescription;