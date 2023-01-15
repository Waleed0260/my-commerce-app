import React, { useState } from 'react'
import Heading from './Heading/Heading'
import Join from './Join/Join'
import logo from "./logo.jpg"
import "./Main.css"
import Seller from './Seller/Seller'
import { Link } from 'react-router-dom'

const Main = () => {
  const [seller, setSeller] = useState(false);
  const [join, setJoin] = useState(false);




  return (
    <div className='main'>
        <div className="head">
        <Link to="/">
            <div className="img">
                <img src={logo} alt="" />
            </div>
            </Link>

            <div className="links">
                <ul>
                    <li>Shop</li>
                    <li>Offers</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
                <button onClick={()=> setSeller(true)}><b>Become a Seller</b></button>
                <Seller open={seller} close={()=> setSeller(false)}/>
                <button onClick={()=> setJoin(true)}><b>join</b></button>
                <Join open={join} close={()=> setJoin(false)}/>
            </div>
        </div>
      <Heading title="Groceries Delivered in 90 Minute" text="Get your healthy foods & snacks delivered at your doorsteps all day everyday"/>

    </div>
  )
}

export default Main