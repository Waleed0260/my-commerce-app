import React, { useContext } from 'react'
import "./BottomLine.css"
import { Context } from '../../Context'
import {BsFilterLeft} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import {BiHomeAlt} from "react-icons/bi"
import {BiShoppingBag} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"



const BottomLine = () => {

  const [menuOpened, setMenuOpened] = useContext(Context);
  const [seller, setSeller] = useContext(Context);

  return (
    <div>
      <div className="white-line">
        <span className="b-filter" onClick={()=> setMenuOpened(true)}><BsFilterLeft/></span>
        <span className="b-filter" to="/"><FiSearch/></span>
        <span className="b-filter"><BiHomeAlt/></span>
        <span className="b-filter"><BiShoppingBag/></span>
        <span onClick={()=> setSeller(true)}  className="b-filter"><BsPerson/></span>
</div>
    </div>
  )
}

export default BottomLine
