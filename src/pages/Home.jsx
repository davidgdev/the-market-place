import React from 'react';
import '../sass/pages/_Home.scss';
import NavBar from '../components/NavBar';
import HomeCategories from '../components/HomeCategories'
import FeaturedProducts from '../components/FeaturedProducts'

import '../sass/pages/_Home.scss'

function Home () {
    return (
        <div className="">
            <NavBar />
            <section className="home-banner">
                <p>all what you want <br /> <span>in just one place</span></p>
            </section>
            <HomeCategories />
            <FeaturedProducts />
        </div>
    )  
};

export default Home;