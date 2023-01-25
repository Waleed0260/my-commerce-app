import React, { useContext } from 'react'
import "./BottomLine.css"
import { Context } from '../../Context'
import {BsFilterLeft} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import {BiHomeAlt} from "react-icons/bi"
import {BiShoppingBag} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import { Link } from 'react-router-dom'


const BottomLine = () => {

  const [menuOpened, setMenuOpened] = useContext(Context)['state1'];
  const [seller, setSeller] = useContext(Context)['state2'];

  return (
    <div>
      <div className="white-line">
        <span className="b-filter" onClick={()=> setMenuOpened(true)}><BsFilterLeft/></span>
        <span className="b-filter"><FiSearch/></span>
        <Link to="/" style={{color: "black"}}><span className="b-filter"><BiHomeAlt/></span></Link>
        <span className="b-filter"><BiShoppingBag/></span>
        <span onClick={()=> setSeller(true)}  className="b-filter"><BsPerson/></span>
</div>
    </div>
  )
}

export default BottomLine
