import React, {useState} from 'react'
import "./Header.css"
import logo from "./logo.jpg";
import Seller from "./Seller/Seller";
import Join from "./Join/Join";
import { Link} from "react-router-dom";

const Header = () => {

    const [seller, setSeller] = useState(false);
    const [join, setJoin] = useState(false);

  return (
    <div className="head">
        <Link to="/">
          <div className="img">
            <img src={logo} alt="" />
          </div>
        </Link>

        <div className="links">
          <ul>
            <li>
              <Link className="link" to="/ShopPage">Shop</Link>
            </li>
            <li><Link className="link" to="/offers">Offers</Link></li>
            <li><Link className="link" to="/help">FAQ</Link></li>
            <li><Link className="link">Contact</Link></li>
          </ul>
          <button onClick={() => setSeller(true)}>
            <b>Become a Seller</b>
          </button>
          <Seller open={seller} close={() => setSeller(false)} />
          <button onClick={() => setJoin(true)}>
            <b>join</b>
          </button>
          <Join open={join} close={() => setJoin(false)} />
        </div>
      </div>
  )
}

export default Header
