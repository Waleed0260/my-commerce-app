import React, { useState } from 'react'
import "./Heading.css"
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


const Heading = ({title, text}) => {

  const[input, setInput] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <div className='heading'>
       <h1>{title}</h1>
       <p>{text}</p>
       <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Search your grocery items here'/>
        <button className='search'> <FaSearch/> Search</button>
       </form>
    </div>
  )
}

export default Heading