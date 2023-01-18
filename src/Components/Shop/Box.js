import React from 'react'
import "./Shop.css"
import Buttons from './Buttons/Buttons';
import { Link } from 'react-router-dom';
import "./Shop.css"

function Box({ items }) {



    return (
        <div className="shop-items" key={items.id}>
            <Link to={"/detail/" + items.id}>
            <img src={items.image} alt="" style={{width: "14vw", height: "14rem"}}/>
            </Link>
            <b>10.00$</b>
            <b>{items.title.slice(0, 20)}</b>
            <Buttons/>
        </div>
    )
}

export default Box