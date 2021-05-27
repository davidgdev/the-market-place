import React from 'react'

import imgTec from "../assets/img/technology-icon.png"
import imgClo from "../assets/img/clothing-icon.png"
import imgFit from "../assets/img/fitness-icon.png"
import imgTra from "../assets/img/travel-icon.png"


function HomeCategories () {
    return (
     <section className="home_categories">
         <h2>categories</h2>
         <article className="category__card">
            <img className="category__card-image" src={imgTec} alt="Technology Category" />
            <p className="category__card-title">Technology</p>
         </article>
         <article className="category__card">
            <img className="category__card-image" src={imgClo} alt="Technology Category" />
            <p className="category__card-title">Clothing</p>
         </article>
         <article className="category__card">
            <img className="category__card-image" src={imgFit} alt="Technology Category" />
            <p className="category__card-title">Fitness</p>
         </article>
         <article className="category__card">
            <img className="category__card-image" src={imgTra} alt="Technology Category" />
            <p className="category__card-title">Travel</p>
         </article>
     </section>
    )
};

export default HomeCategories 