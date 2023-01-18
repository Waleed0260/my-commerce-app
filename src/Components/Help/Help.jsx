import React, {useState} from 'react'
import "./Help.css"
import {AiOutlinePlus} from "react-icons/ai"

const Help = () => {
  const[click, setClick] = useState(false);
  const[done, setDone] = useState(false);
  const[third, setThird] = useState(false);
  const[fourth, setForth] = useState(false)




  return (
    <div className='help'>
   <h1>FAQ</h1>
   <div className="first-block" onClick={()=> setClick(true)}>
    <h4> <span>How to contact with Customer Service?</span> <span><AiOutlinePlus/></span> </h4>
    {click && <p>Our Customer Experience Team is availah4le 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</p>}
   </div>
   <div className="first-block" style={{marginTop: "20px"}} onClick={()=> setDone(true)}>
    <h4> <span>App installation failed, how to update system information?</span> <span><AiOutlinePlus/></span> </h4>
    {done && <p>Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the proh4lem remains, Please Open a ticket in the support forum</p>}
   </div>
   <div className="first-block" style={{marginTop: "20px"}} onClick={()=> setThird(true)}>
    <h4> <span>Website response taking time, how to improve?</span> <span><AiOutlinePlus/></span> </h4>
    {third && <p>At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the proh4lem remains, Please Open a ticket in the support forum.</p>}
   </div>
   <div className="first-block" style={{marginTop: "20px", marginBottom: "40px"}}  onClick={()=> setForth(true)}>
    <h4> <span>Website response taking time, how to improve?</span> <span><AiOutlinePlus/></span> </h4>
    {fourth && <p>At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the proh4lem remains, Please Open a ticket in the support forum.</p>}
   </div>

    </div>
  )
}

export default Help
