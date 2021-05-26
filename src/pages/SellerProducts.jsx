import React from 'react';
import '../sass/pages/_SellerProducts.scss';
import SellerProductList from '../components/SellerProductList';
import SideMenu from '../components/SideMenu';

function SellerProducts () {
    return (
        <main className="seller">
            <SideMenu />
            <div className="seller__separator"/>
            <SellerProductList products="" btn_text_1="Edit" btn_text_2="Delete"/>
        </main> 
    )  
};

export default SellerProducts;