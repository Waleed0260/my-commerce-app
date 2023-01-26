import React, {Suspense, lazy, useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import ErrorFallback from './ErrorBoundary'

const Main = lazy(() => import('./Main/Main'));
const Shop = lazy(() => import('./Shop/Shop'));
const ShopPage = lazy(() => import('./ShopPage/ShopPage'));
const Searched = lazy(() => import('./Searched/Searched'));
const Offers = lazy(() => import('./Searched/Searched'));
const Items = lazy(() => import('./Items/Items'));
const Help = lazy(() => import('./Help/Help'));
const Detail = lazy(() => import('./Detail/Detail'));






const Pages = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense>
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
      </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Pages