import React, {useState, useEffect} from 'react';

import FeaturedProductCard from './FeaturedProductCard'


export const FeaturedProducts = () => {

  const products = [
    {id: 1, name: "Roncof ", category: "technology" , price: 140, image: "https://i.picsum.photos/id/757/400/400.jpg?hmac=eI31C3SciqTt5v7CpCFNvKREavuTOUPbcw0-vBS576A", featured: true },
    {id: 2, name: "Sailfix", category: "clothing" , price: 60, image: "https://i.picsum.photos/id/1061/400/400.jpg?hmac=apVWU5tv7JVHhY0Ae7YjiHiPpS5rRtrjVp5MuQ7Gc9E", featured: true },
    {id: 3, name: "Fix Lab", category: "technology" , price: 80, image: "https://i.picsum.photos/id/1026/400/400.jpg?hmac=9nxaKAoZxDITamZaNU3dULYNcvxB6DNkPSnsO207MYo", featured: true },
    {id: 4, name: "Bamhold", category: "travel" , price: 60, image: "https://i.picsum.photos/id/67/400/400.jpg?hmac=wlcqJPOdBr1W3h-XmG1YRKKBfSI8uFQ0EOaVR1nbuIc", featured: true },
    {id: 5, name: "Vivastrong", category: "fitness" , price: 30, image: "https://i.picsum.photos/id/896/400/400.jpg?hmac=t5cSR3FAX0B8F6RdKvfOrL0y7Ams72GPlnRbmN_arA4", featured: true },
    {id: 6, name: "Lotlab", category: "fitness" , price: 25, image: "https://i.picsum.photos/id/675/400/400.jpg?hmac=AV8UV9SsVepgZVRCrQ_mulAKfHbkFXR2ej3awSjchks", featured: true },
    {id: 7, name: "Tancom", category: "technology" , price: 45, image: "https://i.picsum.photos/id/628/400/400.jpg?hmac=uQnrWHhKS3XBUnJaTHJHb7TBhQX7uZ0p1q_Y2hLnEWY", featured: true },
    {id: 8, name: "Stimla", category: "technology" , price: 215, image: "https://i.picsum.photos/id/610/400/400.jpg?hmac=MjvHW1fTBkifVnK6d5IJgLDtdpM5_n8WqDBv8imkpcw", featured: false },
    {id: 9, name: "Zenin", category: "technology" , price: 76, image: "https://i.picsum.photos/id/606/400/400.jpg?hmac=PsBqSUJiSkQrEsvZwIfgdPvJyHFPMagAAT5pGJS7IG4", featured: false },
    {id: 10, name: "Lottough", category: "clothing" , price: 15, image: "https://i.picsum.photos/id/883/400/400.jpg?hmac=LWX5wcrxWc7EDU681-sDvXS80mDtzFzmOSLT8fGilOA", featured: false }
  ]

  const featuredProducts = products.filter(product => product.featured === true)
  console.log(featuredProducts)

  return (
   <section className="featured_products-container" >
      <h2>featured Products</h2>
      <div className="featured_products-slider">
        {
          featuredProducts.map(item => (
              <FeaturedProductCard 
              title={item.name}  
              price={item.price} 
              image={item.image}
              index={item.id} />
          ))

        }


      </div>
  </section>
  )
}

export default FeaturedProducts;