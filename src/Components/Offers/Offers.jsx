import React from 'react'
import "./Offers.css"
import offer1 from "./images/offer1.webp"
import offer2 from "./images/offer2.webp"
import offer3 from "./images/offer3.webp"
import offer4 from "./images/offer4.webp"
import offer5 from "./images/offer5.webp"
import offer6 from "./images/offer6.webp"
import offer7 from "./images/offer7.webp"
import offer8 from "./images/offer8.webp"



const Offers = () => {
    const data = [
        {
          img: offer1,
          heading: "5OFF2",
          para:"Copy",
        },
        {
          img: offer2,
          heading: "OFF6",
          para:"Copy",
        },
        {
          img: offer3,
          heading: "BAZAR10",
          para:"Copy",
        },
        {
          img: offer4,
          heading: "BAZAR18",
          para:"Copy",
        },
        {
            img: offer5,
            heading: "HELLO15",
            para:"Copy",
          },
          {
            img: offer6,
            heading: "EID12",
            para:"Copy",
          },
          {
            img: offer7,
            heading: "FOO",
            para:"Copy",
          },
          {
            img: offer8,
            heading: "EID2",
            para:"Copy",
          },
      ];
  return (
    <div className='data data-off'>
        {data.map((item, index) => {
          return (
            <>
            <div className="offers" key={index}>
                <div className="off-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="off-text">
                    <p>{item.heading}</p>
                    <p>{item.para}</p>
                </div>
            </div>
            </>
          );
        })}
    </div>
  )
}

export default Offers
