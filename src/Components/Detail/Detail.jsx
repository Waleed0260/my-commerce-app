import React, {useState, useEffect} from 'react'
import Button from './Button/Button';
import "./Detail.css"
import {AiOutlineClose} from "react-icons/ai"


const Detail = ({open, items, setOpen}) => {

    const[products, setProducts] = useState([]);



        const getrecipe = async()=>{
          const url= `https://api.spoonacular.com/food/products/${items}?apiKey=2777352d167849208b58bd3897cbed6e`
          const response = await fetch(url);
          const Detail = await response.json();
          setProducts(Detail)
      }
      useEffect(()=>{
          getrecipe();
      }, [items])

    if(!open) return null;








  return (
    <>
    {/* <Main/> */}
    <div className="over_styles">
      <div className="mod_styles">
      <span className="close-det" onClick={setOpen}><AiOutlineClose/></span>

    <div className='details'>

        <div className='det-img'>
        <img src={products.image} alt="" />
        </div>
        <div className='det-jugo'>
        <h1>{products.title}</h1>
        <b>10.00$</b>
        <Button/>
        </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Detail