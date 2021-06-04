import React, { useEffect, useState } from "react";
import "../sass/pages/_Product.scss";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";
import FullNavbar from "../components/FullNavbar";

function Product() {
  const [category, setCategory] = useState("Technology");

  useEffect(() => {
    // ANCHOR
    /*
    FETCH API AND PASS DATA AS PROPS TO EACH COMPONENT. STORE THE DATA IN STATE
    */
  }, []);

  return (
    <>
      <FullNavbar />
      <main className="product">
        <ProductDescription />
        <RelatedProducts />
      </main>
    </>
  );
}

export default Product;
