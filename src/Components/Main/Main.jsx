import React, { useState } from "react";
import Heading from "./Heading/Heading";
import "./Main.css";
import Cards from "../Cards/Cards";
import Aside from "../Aside/Aside";
import Shop from "../Shop/Shop";

import Searched from "../Searched/Searched";
import BottomLine from "../BottomLine/BottomLine";
import Cart from "../Cart/Cart";

const Main = () => {

  const mobile = window.innerWidth <= 1000 ? true : false;


  
  return (
    <>
    <div className="main">

      <Heading
        title="Groceries Delivered in 90 Minute"
        text="Get your healthy foods & snacks delivered at your doorsteps all day everyday"
      />
    </div>
    <Cards/>
    <Aside/>
    <Cart/>
    </>
  );
};

export default Main;
