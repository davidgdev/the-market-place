import React from 'react';
import '../sass/components/_ProductList.scss';

import ProductListCard from './ProductListCard';

function CategoryProductList ({products, btn_text_1, btn_text_2}) {
    return (
     <section className="sellerList">
        <ProductListCard title="blue notebook" description="Save all your notes in this amazing notebook. 
            It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"
            btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
            seller="hcard__details--hidden" category="hcard__details"
            buttonLink="/products"
        />
        <ProductListCard title="blue notebook" description="Save all your notes in this amazing notebook. 
            It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"
            btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
            seller="hcard__details--hidden" category="hcard__details"
            buttonLink="/products"
        />
     </section>
    )
};

export default CategoryProductList;