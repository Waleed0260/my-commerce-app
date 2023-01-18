import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'  
import Detail from './Detail/Detail'
import ErrorFallback from './ErrorBoundary'
import Help from './Help/Help'
import Items from './Items/Items'
import Main from './Main/Main'
import Offers from './Offers/Offers'
import Searched from './Searched/Searched'
import Shop from './Shop/Shop'
import ShopPage from './ShopPage/ShopPage'



const Pages = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route exact path="/" element={<>
        <Main/>
        <Shop/>
        </>}/>
         <Route path="/shop/:type" element={<Items/>}/> 
       <Route path="/detail/:name" element={<Detail/>}/>
        <Route path="/searched/:type" element={<Searched/>}/>
        <Route path="/ShopPage" element={<ShopPage/>}/>
        <Route path='/offer' element={<Offers/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default Pages