import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
    

        const[products, setProducts] = useState([])

        let params = useParams();
    
        const getProducts = async(name)=>{
            const url= `https://api.spoonacular.com/food/products/search?apiKey=2777352d167849208b58bd3897cbed6e&query=${name}&vegetables&number=20`
            const response = await fetch(url);
            const resJson = await response.json();
            setProducts(resJson.products);
      }
    
      useEffect(()=>{
          getProducts(params.type);
      }, [params.type])

            return <OriginalComponent products={products} />
    }
    return NewComponent;
}

export default UpdatedComponent;
