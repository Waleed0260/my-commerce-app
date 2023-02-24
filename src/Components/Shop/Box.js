import React, { useState } from "react";
import "./Shop.css";
import Buttons from "./Buttons/Buttons";
import "./Shop.css";
import Detail from "../Detail/Detail";
import Cart from "../Cart/Cart";
import { useStore } from "../store/store";
import toast, { Toaster } from "react-hot-toast";



function Box({ items }) {
  const [item, setItem] = useState(0);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("10.00$");
  const addPizza = useStore((state) => state.addPizza);

  const handleRemove = (i)=>{
    setValue(value - 1)
    toast.error("Item removed")
  }

  const increase = ()=>{
    setValue(value + 1 )
  }

  const addToCart = () => {
    setValue(value + 1)
    addPizza({ ...items, price: price, quantity: value });
    toast.success("Added to cart");
  };





  return (
    <>
      <div className="shop-items" key={items.id}>
        <img src={items.image} alt="" onClick={() => setOpen(true)} />
        <b>{price}</b>
        <b>{items.title.slice(0, 20)}</b>
        {/* <Buttons/> */}
        <div className="buttons">
          <span onClick={value >= 0 ? handleRemove: ""}>-</span>
          <span>{value <= 0 ? "Add" : value}</span>
          <span onClick={addToCart}>+</span>
          <span><Toaster 
            position="top-center"
            reverseOrder={false}/></span>
        </div>
      </div>
      <Detail open={open} items={items.id} setOpen={() => setOpen(false)} />
    </>
  );
}

export default Box;
