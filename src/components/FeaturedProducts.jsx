import React, { Component } from 'react'
import FeaturedProductCard from './FeaturedProductCard'

import '../sass/components/_FeaturedProducts.scss'

class FeaturedProducts extends Component {
    render() {
        return (
            <section className="featured_products-container">
                <h2>featured Products</h2>
                  <FeaturedProductCard title="blue notebook" description="Save all your notes in this amazing notebook. 
                It has 100 blank pages to be filled with your stories." price="10.00" quantity="5"/>
            </section>
        );
    }
}

export default FeaturedProducts;