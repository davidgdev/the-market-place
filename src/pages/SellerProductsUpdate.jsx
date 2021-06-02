import React from 'react';
import '../sass/pages/_SellerProduct.scss';
import UpdateProduct from '../components/UpdateProduct';
import SideMenu from '../components/SideMenu';

function SellerProductsUpdate () {
    return (
        <main className="seller">
            <SideMenu />
            <div className="seller__separator"/>
            <UpdateProduct />
        </main> 
    )  
};

export default SellerProductsUpdate;