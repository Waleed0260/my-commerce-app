import React from 'react'
import "./Cart.css"
import { useStore } from '../store/store'

const Cart = () => {
  const state = useStore((state)=> state)
  console.log(state)
  const items = useStore((state)=> state.cart.pizzas.length);
  return (
    <div className='cart'>
        <div className="sidecart">
            <b>0 items</b>
            <button>
                <b>{items}</b>
            </button>
        </div>
      
    </div>
  )
}

export default Cart
