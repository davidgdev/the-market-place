import React from 'react';
import '../sass/pages/_ProductList.scss';

import HomeCategories from '../components/HomeCategories';
import FullNavbar from '../components/FullNavbar';

function Category () {
    return (
        <>
        <FullNavbar/>
        <main className="categories">
            <HomeCategories />
        </main>
        </>
    )  
};

export default Category;