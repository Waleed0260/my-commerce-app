import React, {useState} from 'react'
import "./Buttons.css"
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



  return (
    <div className='buttons'>
      <span  onClick={value >= 0 ? decrease : ""}>-</span>
      <span>{value <= 0 ? "Add": value}</span>
      <span  onClick={increase}>+</span>
      {/* <Product items={item} get={value} click={increase}/> */}
    </div>
  )
}

export default Buttons