import React from 'react';
import '../sass/pages/_Product.scss';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';
import FullNavbar from '../components/FullNavbar';

function Product() {
    return(
        <>
        <FullNavbar/>
        <main className="product">
                <ProductDescription />
                <RelatedProducts />
        </main>
        </>
    ) 
    
}

export default Product;