import React from 'react'
import "./CartPage.css"
import {BiShoppingBag} from "react-icons/bi"
import {RxCross2} from "react-icons/rx"



const CartPage = ({open, onClose}) => {
    if(!open) return null;

    

  return (
    <div className="overlay">
    <div className='CartPage'>
        <div className='top-headline'>
        <b><BiShoppingBag/>0 Item</b>
            <span><RxCross2 onClick={onClose}/></span>
        </div>
        <hr />
        <div className="main">
            <span><BiShoppingBag/></span>
            <b>NO productsfound</b>
        </div>
        <div className='order' style={{backgroundColor: "white"}}>
            <b>checkout</b>
            <button>0.00$</button>
        </div>
    </div>
    </div>
  )
}

export default CartPage
