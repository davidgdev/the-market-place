import React, { Fragment } from 'react';
import '../sass/pages/_Home.scss';
import HomeCategories from '../components/HomeCategories'
import FeaturedProducts from '../components/FeaturedProducts'

import '../sass/pages/_Home.scss'

function Home () {
    return (
        <Fragment>
            <section className="home-banner">
                <p>all what you want <br /> <span>in just one place</span></p>
            </section>
            <HomeCategories />
            <FeaturedProducts />
        </Fragment>
    )  
};

export default Home;