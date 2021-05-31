import React, { useState, useEffect } from 'react';
import '../sass/pages/_ProductList.scss';
import SellerProductList from '../components/SellerProductList';
import SideMenu from '../components/SideMenu';

function SellerProducts () {

    const [products, setProducts] = useState([]);

    useEffect (()=>{
        getSellerProducts()
    },[])

    function getSellerProducts () {
        fetch('/mockAPI/sellerProducts.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setProducts(data)
        })
    }

    return (
        <main className="category grid">
            <SideMenu />
            <div id="separator" className="seller__separator"/>
            <SellerProductList products={products} btn_text_1="Edit" btn_text_2="Delete"/>
        </main> 
    )  
};

export default SellerProducts;