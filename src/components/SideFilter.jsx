import React from 'react';
import '../sass/components/_SideFilter.scss';

function SideFilter({category}){
    return (
      <section className="sideFilter">
        <h1 className="sideFilter__title">Books{category}</h1>
        <p className="sideFilter__filterTitle">Brands</p>
        <ul className="sideFilter__filterBlock">
          <li className="sideFilter__filterOption">brand 1</li>
          <li className="sideFilter__filterOption">brand 2</li>
          <li className="sideFilter__filterOption">brand 3</li>
        </ul>
        <p className="sideFilter__filterTitle">Price</p>
        <ul className="sideFilter__filterBlock">
          <li className="sideFilter__filterOption">minimum price</li>
          <li className="sideFilter__filterOption">maximum price</li>
          <li className="sideFilter__filterOption">discounts</li>
        </ul>
      </section>
    );
}

export default SideFilter;