import React from 'react';
import '../sass/pages/_Category.scss';
import CategoryProductList from '../components/CategoryProductList';
import SideFilter from '../components/SideFilter';

function Category ({category}) {
    return (
        <main className="category">
            <SideFilter category={category}/>
            <div className="category__separator"/>
            <CategoryProductList products="" btn_text_1="View" btn_text_2="Buy"/>
        </main>
    )  
};

export default Category;