import React from 'react';
import '../sass/pages/_SellerProduct.scss';
import UpdateProduct from '../components/UpdateProduct';
import SideMenu from '../components/SideMenu';
import FullNavbar from '../components/FullNavbar';

function SellerProductsUpdate () {
    return (
        <>
        <FullNavbar/>
        <main className="seller grid">
            <SideMenu />
            <div className="seller__separator"/>
            <UpdateProduct />
        </main>
        </> 
    )  
};

export default SellerProductsUpdate;