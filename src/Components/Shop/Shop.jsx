import React, { useEffect, useState } from 'react'

import "./Shop.css"
import Box from './Box';
import BottomLine from '../BottomLine/BottomLine';


const Shop = () => {

  const mobile = window.innerWidth <= 1000 ? true : false;


  const [products, setProducts] = useState([]);

  const getProducts = async () => {
     const url = `https://api.spoonacular.com/food/products/search?apiKey=e2d392617b924963a2edb8e0e7a61b59&query=fruits&vegetables&number=20`
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
      {mobile && <BottomLine/>}
    </>
  )
}

export default Shop