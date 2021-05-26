import React from 'react';
import SellerProductList from '../components/SellerProductList';

function SellerProducts () {
    return (
        <>
        <p>my products</p>
        <p>upload products</p>
        <SellerProductList products="" btn_text_1="Edit" btn_text_2="Delete"/>
        </>
    )  
};

export default SellerProducts;