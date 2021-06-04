import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../sass/components/_ProductDescription.scss';

import Photo from './Photo';
import PhotoReel from './PhotoReel';
import ProductDetails from './ProductDetails';

const apiUrl = "https://60b6e02417d1dc0017b88701.mockapi.io/api/v1/products/";

function ProductDescription () {
    const { id } = useParams();
    

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(apiUrl+id);
            const productDetails = await data.json();
            setProduct(productDetails);
        }

        getData();
    }, [id]);
    
    return (
     <section className="prodDesc">
        <PhotoReel photos={product.image} />
        <Photo size="photo__img photo__img--large" image={product.image}/>
        <ProductDetails name={product.name} description={product.description} price={product.price} quantity={product.quantity} seller={product.seller}/>
     </section>
    )
};

export default ProductDescription;