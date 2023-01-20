import React, { useState } from 'react'
import "./Shop.css"
import Buttons from './Buttons/Buttons';
import { Link } from 'react-router-dom';
import "./Shop.css"
import Detail from '../Detail/Detail';

function Box({ items }) {

    const [open, setOpen] = useState(false)

    return (
        <>
        <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" style={{width: "14vw", height: "14rem"}} onClick={()=> setOpen(true)}/>
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>
            <Buttons/>
        </div>
        <Detail open={open} items={items.id}/>
        </>
    )
}

export default Box