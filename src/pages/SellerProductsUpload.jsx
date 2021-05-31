import React, {useState, useEffect} from 'react';
import '../sass/pages/_SellerProduct.scss';
import UploadProduct from '../components/UploadProduct';
import SideMenu from '../components/SideMenu';

function SellerProductsUpload () {

    const [newProduct, setNewProduct] = useState({
        "name":'',
        "price":'',
        "category":'',
        "quantity": 0,
        "description":'',
        "image":'',
    });

    function handleChange(ev) {
        console.log(ev)
    }

    return (
        <main className="seller grid">
            <SideMenu />
            <div id="separator" className="seller__separator"/>
            <UploadProduct onChange={handleChange}/>
        </main> 
    )  
};

export default SellerProductsUpload;