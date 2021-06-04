import React from 'react';
import '../sass/pages/_SellerProduct.scss';
import UploadProduct from '../components/UploadProduct';
import SideMenu from '../components/SideMenu';
import FullNavbar from '../components/FullNavbar';


function SellerProductsUpload () {
    return (
        <>
        <FullNavbar/>
        <main className="seller grid">
            <SideMenu />
            <div id="separator" className="seller__separator"/>
            <UploadProduct />
        </main> 
        </>
    )  
};

export default SellerProductsUpload;