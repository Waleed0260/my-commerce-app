import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Box from '../Shop/Box';
import "./Searched.css"
const Searched = () => {
    const[products, setProducts] = useState([])

    let params = useParams();

    const getProducts = async(name)=>{
        const url= `https://api.spoonacular.com/food/products/search?apiKey=e2d392617b924963a2edb8e0e7a61b59&query=${name}&vegetables&number=20`
        const response = await fetch(url);
        const resJson = await response.json();
        setProducts(resJson.products);
  }

  useEffect(()=>{
      getProducts(params.type);
  }, [params.type])


  return (
    <div className='shop'>
        {products.map((items)=> (<Box items={items}/>))}
    </div>
  )
}

export default Searched
