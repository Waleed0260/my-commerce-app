import React from 'react'
import "./ShopPage.css"


const ShopData = ({image, heading, para}) => {
  return (
    <div className='ShopData'>
    <div className="shop-img">
      <img src={image} alt="" />
      </div>
      <div className="text">
      <h3>{heading}</h3>
      <p>{para}</p>
      </div>
    </div>
  )
}

export default ShopData
