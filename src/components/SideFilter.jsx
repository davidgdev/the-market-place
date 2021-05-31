import React from 'react';
import '../sass/components/_SideFilter.scss';

function SideFilter({title}){
    return (
      <section className="sideFilter">
        <h1 className="sideFilter__title">{title}</h1>
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