import React, { useEffect, useState } from 'react'

import "./Shop.css"
import Box from './Box';


const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
     const url = `https://api.spoonacular.com/food/products/search?apiKey=e47747c220704024afb8a990b4f719f7&query=fruits&vegetables&number=20`
    const response = await fetch(url);
    const resJson = await response.json();
    setProducts(resJson?.products);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <div className='shop'>
        {products?.map((items) => (<Box items={items} />))}
      </div>
    </>
  )
}

export default Shop