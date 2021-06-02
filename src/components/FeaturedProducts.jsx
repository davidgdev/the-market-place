import React, {useState, useEffect} from 'react';
import FeaturedProductCard from './FeaturedProductCard'
import '../sass/components/_FeaturedProducts.scss'


const apiUrl = 'https://60b6e02417d1dc0017b88701.mockapi.io/api/v1/products';

export const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    const data = await fetch(apiUrl);
    const featured = await data.json();
    console.log(featured);
    setProducts(featured)
  }
  
  const featuredProducts = products.filter(products => products.featured === 1) 

  return (

   <section className="featured_products-container" >
      <h2>featured Products</h2>
      <div className="featured_products-slider">
        {
          featuredProducts.map(item => (
              <FeaturedProductCard 
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