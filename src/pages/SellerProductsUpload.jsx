import React from 'react';
import '../sass/pages/_SellerProducts.scss';
import UploadProduct from '../components/UploadProduct';
import SideMenu from '../components/SideMenu';

function SellerProductsUpload () {
    return (
        <main className="seller">
            <SideMenu />
            <div className="seller__separator"/>
            <UploadProduct />
        </main> 
    )  
};

export default SellerProductsUpload;