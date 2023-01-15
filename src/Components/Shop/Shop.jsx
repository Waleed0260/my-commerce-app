import React, { useEffect, useState } from 'react'

import "./Shop.css"
import Box from './Box';


const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
     const url = `https://api.spoonacular.com/food/products/search?apiKey=e2d392617b924963a2edb8e0e7a61b59&query=rice&vegetables&number=20`
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