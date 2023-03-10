import React, {useState, useContext} from 'react'
import "./Header.css"
import { Context } from '../../Context';
import logo from "./logo.jpg";
import Seller from "./Seller/Seller";
import Join from "./Join/Join";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import Cart from '../Cart/Cart';

const Header = () => {
  const mobile = window.innerWidth <= 1000 ? true : false;

    const [seller, setSeller] = useContext(Context)['state2'];
    const [join, setJoin] = useState(false);

    const[input, setInput] = useState("");

    const navigate = useNavigate();
    const handleSubmit = (e)=>{
      e.preventDefault();
      navigate("/searched/" + input);
    }

    
    
  return (
    <div className="head">
      <div className="form">
        <Link to="/">
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </Link>
        { mobile && <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" className='input' value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Search your grocery items here'/>
        <button className='search'> <FaSearch/> Search</button>
       </form>}
       </div>


       
        {mobile || <div className="links">
          <ul>
            <li>
              <Link className="link" to="/ShopPage">Shop</Link>
            </li>
            <li><Link className="link" to="/offer">Offers</Link></li>
            <li><Link className="link" to="/help">FAQ</Link></li>
            <li><Link className="link">Contact</Link></li>
          </ul>
          <button onClick={() => setSeller(true)}>
            <b>Become a Seller</b>
          </button>
          <button onClick={() => setJoin(true)}>
            <b>join</b>
          </button>
        </div>}
        <Seller open={seller} close={() => setSeller(false)} />
        <Join open={join} close={() => setJoin(false)} />
      </div>
  )
}

export default Header
