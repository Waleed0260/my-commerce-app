import React from "react";
import "./CartPage.css";
import { BiShoppingBag } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

const CartPage = ({ open, onClose }) => {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);

  if (!open) return null;

  const handleRemove = (i)=>{
    removePizza(i);
    toast.error("Items removed");
  }

  const total = ()=> CartData.pizzas.reduce((a,b)=> a+b.quantity * b.price, 0)



  return (
    <div className="overlay">
      <div className="CartPage">
        <div className="top-headline">
          <b>
            <BiShoppingBag />0 Item
          </b>
          <span>
            <RxCross2 onClick={onClose}  style={{cursor: "pointer"}}/>
          </span>
        </div>
        <hr style={{ color: "black", width: "100%" }} />
        <div className="Cartmain">
          <div className="cart-products">
            {CartData.pizzas.length > 0 &&
              CartData.pizzas.map((pizza, i) => {
                return (
                  <>
                    <div className="cart-items" key={i}>
                      <div className="cart-img">
                        <img src={pizza.image} alt="" />
                        <div className="cart-det">
                          <b>{pizza.title.slice(0, 20)}</b>
                          <p>{pizza.price}</p>
                        </div>
                      </div>

                      <div className="last">
                        <b>{pizza.quantity * 10.00} $ </b>
                        <span>
                          <RxCross2 onClick={()=>handleRemove(i)} />
                        </span>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
          </div>
          {!CartData.pizzas.length > 0 && (
            <>
              <span>
                <BiShoppingBag />
              </span>
              <b>NO productsfound</b>
            </>
          )}
        </div>
        <div className="totalprice">
          <b>Checkout</b>
          <button>
            <b>$ {total()}</b>
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CartPage;
