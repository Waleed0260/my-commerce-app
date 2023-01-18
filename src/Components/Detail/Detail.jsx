import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Main from '../Main/Main';
import Button from './Button/Button';
import "./Detail.css"


const Detail = () => {

    const[products, setProducts] = useState([]);

    let params = useParams();

    const getrecipe = async()=>{
        const url= `https://api.spoonacular.com/food/products/${params.name}?apiKey=e2d392617b924963a2edb8e0e7a61b59`
        const response = await fetch(url);
        const Detail = await response.json();
        setProducts(Detail)
    }
    useEffect(()=>{
        getrecipe();
    }, [params.name])



  return (
    <>
    <Main/>
    <div className='details'>
        <div className='det-img'>
        <img src={products.image} alt="" />
        </div>
        <div className='det-jugo'>
        <h1>{products.title}</h1>
        {/* <span><p>{products.description.slice(0, 180)}</p></span> */}
        <b>10.00$</b>
        <Button/>
        </div>
    </div>
    </>
  )
}

export default Detail