import React, {useState, useEffect} from 'react'
import Button from './Button/Button';
import "./Detail.css"
import {AiOutlineClose} from "react-icons/ai"


const Detail = ({open, items, setOpen}) => {

    const[products, setProducts] = useState([]);



        const getrecipe = async()=>{
          const url= `https://api.spoonacular.com/food/products/${items}?apiKey=e47747c220704024afb8a990b4f719f7`
          const response = await fetch(url);
          const Detail = await response.json();
          setProducts(Detail)
      }
      useEffect(()=>{
          getrecipe();
      }, [items])

    if(!open) return null;



  //   const MODAL_STYLES = {
  //     position: "fixed",
  //     left: "50%",
  //     top: "50%",
  //     transform: "translate(-50%, -50%)",
  //     backgroundColor: "#FFF",
  //     // padding: "50px",
  //     // zIndex: 1000,
  //     border: "4px solid var(--orange)",
  //     height: "600px",
  //     width: "90vw"
  // }
  // const OVERLAY_STYLES = {
  //     position: "fixed",
  //     left: 0,
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     backgroundColor: "rgba(0,0,0,0.7)",
  //     zIndex: 1000
  // }
  const MODAL_STYLES = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    // padding: "50px",
    // zIndex: 1000,
    border: "4px solid var(--orange)",
    borderRadius: "10px",
    height: "600px",
    width: "90vw"
  }
const OVERLAY_STYLES = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000
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
        <span className="close" onClick={setOpen}><AiOutlineClose/></span>
        </div>
    </div>
    </div>
    </>
  )
}

export default Detail