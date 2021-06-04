import React from 'react';
import '../sass/components/_ProductList.scss';

import ProductListCard from './ProductListCard';

function CategoryProductList ({products, btn_text_1, btn_text_2}) {
    return (
     <section id="product-list" className="sellerList">
        {
            products.map((item) => 
                <ProductListCard key={item.id} title={`${item.name} -(${item.category})`} description={item.description} price={item.price}
                btn_text_1={btn_text_1} btn_text_2={btn_text_2} 
                seller="hcard__details--hidden" category="hcard__details"
                buttonLink={`/products/${item.id}`}
                />
            )
        }
     </section>
    )
};

export default CategoryProductList;