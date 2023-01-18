
import UpdatedComponent from '../HOC';
import Main from '../Main/Main';
import Box from '../Shop/Box';
// import "./Items.css"

const Items = ({products}) => {



    
  return (
    <>
    <Main/>
    <div className='shop'>
            {products.map((items)=>(<Box items={items}/>))}
    </div>
    </>
  )
}

export default UpdatedComponent(Items)