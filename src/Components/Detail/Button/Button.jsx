import React, {useState} from 'react'
import "./Button.css"
const Button = () => {
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
    <div className='button'>
      <span onClick={value >= 0 ? decrease : ""}>-</span>
      <span>{value <= 0 ? "Add": value}</span>
      <span onClick={increase} style={{cursor: "pointer"}}>+</span>
      {/* <Product items={item} get={value} click={increase}/> */}
    </div>
  )
}

export default Button