import React from 'react';
import '../sass/components/_ProductList.scss';

import ProductListCard from './ProductListCard';

function SellerProductList ({products, btn_text_1, btn_text_2}) {
    return (
     <section className="sellerList">
        <ProductListCard title="blue notebook" description="Save all your notes in this amazing notebook. 
            It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"
            btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
            category="hcard__details--hidden" seller="hcard__details"
            buttonLink="/update"

        />
        <ProductListCard title="blue notebook" description="Save all your notes in this amazing notebook. 
            It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"
            btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
            category="hcard__details--hidden" seller="hcard__details"
            buttonLink="/update"
        />
     </section>
    )
};

export default SellerProductList;