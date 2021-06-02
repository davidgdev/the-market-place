import React, {useState, useEffect} from 'react';
import RelatedProductCard from './RelatedProductCard';
import '../sass/components/_RelatedProducts.scss'

const apiUrl = 'https://60b6e02417d1dc0017b88701.mockapi.io/api/v1/products';

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    const data = await fetch(apiUrl);
    const related = await data.json();
    console.log(related);
    setProducts(related)
  }
  
  const relatedProducts = products.filter(products => products.featured === 1) 

  return (
  
   <section className="related_products-container" >
      <h2>related products</h2>
      <div className="related_products-slider">
        {
          relatedProducts.map(item => (
              <RelatedProductCard 
              name={item.name}  
              price={item.price} 
              image={item.image}
              key={item.id}
              id={item.id}
               />
          ))
        }


      </div>
  </section>
  )
}

export default FeaturedProducts;