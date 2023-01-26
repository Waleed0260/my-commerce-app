import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, {Suspense, lazy} from 'react'

const Pages = lazy(() => import('./Components/Pages'));
const Header = lazy(() => import('./Components/Header/Header'));



function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Header/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
