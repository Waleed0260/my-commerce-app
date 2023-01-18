import React from 'react'
import ShopData from './ShopData'
import "./ShopPage.css"
import Furniture from './img/Furniture.webp'
import Bags from './img/Bags.webp'
import bakery from './img/bakery.webp'
import Books from './img/Books.webp'
import fashion from './img/fashion.webp'
import Makeup from './img/Makeup.webp'
import Grocery from './img/Grocery.webp'



const ShopPage = () => {

    //  const Data = [
    //     {
    //         img: Furniture,
    //         heading: "Furniture Shop",
    //         para: "588 Finwood Road, New Jersey, East Dover, 08753, USA"
    //     },
    //     {
    //         img: Bags,
    //         heading: "Bags Shop",
    //         para: "4885 Spring Street, Illinois, Lincoln, 62656, USA"
    //     },    
    //     {
    //         img: bakery,
    //         heading: "Bakery Shop",
    //         para: "1740 Bedford Street, Alabama, Michigan, 35203, USA"
    //     },
    //     {
    //         img: Books,
    //         heading: "Books Shop",
    //         para: "2960 Rose Avenue, Louisiana, Metairie, 70001, USA"
    //     },
    //     {
    //         img: fashion,
    //         heading: "Fashion Shop",
    //         para: "4422 Fort Street, Carolina, Rocky Mount, 27801, USA"
    //     },
    //     {
    //         img: Makeup,
    //         heading: "Makeup Shop",
    //         para: "1986 Spinnaker Lane, Illinois, Freeport, 61032, USA"
    //     },
    //     {
    //         img: Grocery,
    //         heading: "Grocery Shop",
    //         para: "44444, California, zurich, 8021, Switzerland"
    //     },
    // ]


  return (
    <div className="ShopPage">
        <h1>All Shops</h1>
    <div className='shops'>
        <ShopData image={Furniture} heading="Furniture Shop" para="588 Finwood Road, New Jersey, East Dover, 08753, USA"/>
        <ShopData image={Bags} heading="Bags Shop" para="4885 Spring Street, Illinois, Lincoln, 62656, USA"/>
        <ShopData image={bakery} heading="bakery Shop" para="1740 Bedford Street, Alabama, Michigan, 35203, USA"/>
        <ShopData image={Books} heading="Books Shop" para="2960 Rose Avenue, Louisiana, Metairie, 70001, USA"/>
        <ShopData image={fashion} heading="fashion Shop" para="4422 Fort Street, Carolina, Rocky Mount, 27801, USA"/>
        <ShopData image={Makeup} heading="Makeup Shop" para="1986 Spinnaker Lane, Illinois, Freeport, 61032, USA"/>
        <ShopData image={Grocery} heading="Grocery Shop" para="44444, California, zurich, 8021, Switzerland"/>
    </div>

    </div>
  )
}

export default ShopPage
