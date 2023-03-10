import React, {useState} from 'react'
import logo from "../logo.jpg"
import {AiOutlineClose} from "react-icons/ai"

const Join = ({open, close}) => {



    const[join, setJoin] = useState(false);

    const handleSubmit =(event)=>{
      event.preventDefault();
      setTimeout(function () {
        setJoin('Thanks for submitting')
    }, 2000)
  }
  
  
  
  
      if(!open) return null;
  
      const MODAL_STYLES = {
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FFF",
          padding: "50px",
          zIndex: 1000,
          border: "4px solid var(--orange)",
          borderRadius: "10px",
          width: "25vw"
      }
      const OVERLAY_STYLES = {
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000
      }





  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <span onClick={close} className="close"><AiOutlineClose/></span>
        <div className="seller">
            <div className="top">
            <img src={logo} alt="" />
            <em>Register new account</em>
            </div>
            <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input type="text" name="email" id="name" />
            <br/>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required />
            <br/>           
             <label for="password">Password</label>
            <input type="password" name="password" id="pass" required />
            <br/>
            <input type="submit" value="Register" />
            {join && <b className='bold'>Thanks for joining</b>}
            </form>
        </div>
      </div>
    </div>
  )
}

export default Join
