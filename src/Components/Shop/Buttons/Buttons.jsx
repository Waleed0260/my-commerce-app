import React, {useState} from 'react'
import "./Buttons.css"
import { useStore } from '../../store/store';

const Buttons = () => {

  
    const[item, setItem] = useState(0);
    const[value, setValue] = useState(0);
  const increase = () => {
      setValue(value + 1)
      setItem(item + 10.00)
  }
  const decrease = () => {
    setValue(value - 1)
    setItem(item - 10.00)
}

// const addPizza = useStore((state) => state.addPizza);
// const addToCart = () => {
//   addPizza({ ...curElement, price: size === 0 ? curElement.price: size === 1 ? curElement.price1: curElement.price2,  quantity: item, size: size });
// };



  return (
    <div className='buttons'>
      <span  onClick={value >= 0 ? decrease : ""}>-</span>
      <span>{value <= 0 ? "Add": value}</span>
      <span  onClick={increase}>+</span>
    </div>
  )
}

export default Buttons