import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Pages from './Components/Pages';
import React from "react";
import Header from './Components/Header/Header';
import ShopPage from './Components/ShopPage/ShopPage';
import Help from './Components/Help/Help';
// import 'bootstrap/dist/css/bootstrap.min.css';



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
