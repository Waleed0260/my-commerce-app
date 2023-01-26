import React, { useState } from 'react'
import "./Shop.css"
import Buttons from './Buttons/Buttons';
import "./Shop.css"
import Detail from '../Detail/Detail';

function Box({ items }) {

    const [open, setOpen] = useState(false)
    return (
        <>
        <div className="shop-items" key={items.id}>
            <img src={items.image} alt="" onClick={()=> setOpen(true)}/>
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>
            <Buttons/>
        </div>
        <Detail open={open} items={items.id} setOpen={()=> setOpen(false)}/>
        </>
    )
}

export default Box