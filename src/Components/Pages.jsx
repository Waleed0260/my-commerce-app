import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import Detail from './Detail/Detail'
import ErrorFallback from './ErrorBoundary'
import Items from './Items/Items'
import Searched from './Searched/Searched'
import Shop from './Shop/Shop'
const Pages = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/shop/:type" element={<Items/>}/>
        <Route path="/detail/:name" element={<Detail/>}/>
        <Route path="/searched/:type" element={<Searched/>}/>
      </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default Pages