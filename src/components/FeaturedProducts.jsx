import React from 'react';

import FeaturedProductCard from './FeaturedProductCard'


export const FeaturedProducts = () => {

  return (
   <section className="featured_products-container" >
      <h2>featured Products</h2>
      <div className="featured_products-slider">
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="0" />
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="1" />
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="2" />
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="3" />
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="4" />
        <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"  index="5" />

      </div>
  </section>
  )
}

export default FeaturedProducts;