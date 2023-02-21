import React, { useState } from 'react'
import "./Shop.css"
import Buttons from './Buttons/Buttons';
import "./Shop.css"
import Detail from '../Detail/Detail';
import Cart from '../Cart/Cart';
import { useStore } from '../store/store';

function Box({ items }) {
    const[item, setItem] = useState(0);
    const[value, setValue] = useState(0);
    const [open, setOpen] = useState(false)
    const[price, setPrice] = useState("10.00$")
  const increase = () => {
      setValue(value + 1)
      setItem(item + 10.00)
  }
  const decrease = () => {
    setValue(value - 1)
    setItem(item - 10.00)
}

const addPizza = useStore((state) => state.addPizza)
const addToCart = () => {
    addPizza({ ...items, price: price, quantity: value});
  };

    return (
        <>
        <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" onClick={()=> setOpen(true)}/>
            <b>{price}</b>
            <b>{items.title.slice(0, 20)}</b>
            {/* <Buttons/> */}
            <div className='buttons'>
      <span  onClick={value >= 0 ? decrease : ""}>-</span>
      <span onClick={addToCart}>{value <= 0 ? "Add": value}</span>
      <span  onClick={increase}>+</span>
    </div>
        </div>
        <Detail open={open} items={items.id} setOpen={()=> setOpen(false)}/>
        </>
    )
}

export default Box