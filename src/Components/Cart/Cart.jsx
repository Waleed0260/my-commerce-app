import React, {useState} from 'react'
import "./Cart.css"
import { useStore } from '../store/store'
import CartPage from './CartPage/CartPage'

const Cart = () => {
  const state = useStore((state)=> state)
  console.log(state)
  const items = useStore((state)=> state.cart.pizzas.length);

  const[openCart, setOpenCart] = useState(false);


  return (
    <>
    <div className='cart'>
        <div className="sidecart">
            <b>{items} items</b>
            <button onClick={()=> setOpenCart(true)}>
                <b>0.00 $</b>
            </button>
        </div>
    </div>
    <CartPage open={openCart} onClose={()=> setOpenCart(false)}/>
    </>
  )
}

export default Cart
