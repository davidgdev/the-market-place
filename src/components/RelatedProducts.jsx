import React, { useState, useEffect } from "react";
import RelatedProductCard from "./RelatedProductCard";

import { getRelated } from "../services/index";
import "../sass/components/_RelatedProducts.scss";

const apiUrl = "https://60b6e02417d1dc0017b88701.mockapi.io/api/v1/products";

export const FeaturedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getRelated.then((response) => {
      console.log(response);
      setProducts(response);
    });
  }, []);

  // const getProducts = async () => {
  //   const data = await fetch(apiUrl);
  //   const related = await data.json();
  //   console.log(related);
  //   setProducts(related);
  // };

  const relatedProducts = products.filter(
    (products) => products.category == category
  );

  return (
    <section className="related_products-container">
      <h2>related products</h2>
      <div className="related_products-slider">
        {relatedProducts.map((item) => (
          <RelatedProductCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
