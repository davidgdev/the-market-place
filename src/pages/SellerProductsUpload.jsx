import React from 'react';
import '../sass/pages/_SellerProduct.scss';
import UploadProduct from '../components/UploadProduct';
import SideMenu from '../components/SideMenu';


function SellerProductsUpload () {
    return (
        <main className="seller grid">
            <SideMenu />
            <div id="separator" className="seller__separator"/>
            <UploadProduct />
        </main> 
    )  
};

export default SellerProductsUpload;