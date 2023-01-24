import React, {useState, useEffect} from 'react'
import Button from './Button/Button';
import "./Detail.css"


const Detail = ({open, items}) => {

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



    const MODAL_STYLES = {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#FFF",
      // padding: "50px",
      // zIndex: 1000,
      border: "4px solid var(--orange)",
      height: "600px",
      width: "90vw"
  }
  const OVERLAY_STYLES = {
      position: "fixed",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgb(183, 188, 190)",
      // zIndex: 1000
  }





  return (
    <>
    {/* <Main/> */}
    <div style={MODAL_STYLES}>
      <div style={OVERLAY_STYLES}>
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