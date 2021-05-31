import React from 'react';
import '../sass/components/_ProductList.scss';

import ProductListCard from './ProductListCard';

function SellerProductList ({products, btn_text_1, btn_text_2}) {
    return (
     <section id="seller-list" className="sellerList">
        {
            products.map((item) => 
                <ProductListCard key={item.id} title={item.name} description={item.description} price={item.price} quantity={item.quantity}
                btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
                category="hcard__details--hidden" seller="hcard__details"
                buttonLink="/update"
                />
            )
        }
     </section>
    )
};

export default SellerProductList;