import React from 'react';
import NavBar from '../components/NavBar';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts'

function Product() {
    return(
        <div>
            <NavBar />
            <ProductDescription />
            <RelatedProducts />
        </div>
    ) 
    
}

export default Product