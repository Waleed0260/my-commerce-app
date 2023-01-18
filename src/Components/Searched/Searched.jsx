
import Box from '../Shop/Box';
import UpdatedComponent from '../HOC';
import Main from '../Main/Main';

const Searched = ({products}) => {



  return (
    <>
    <Main/>
    <div className='shop'>
        {products.map((items)=> (<Box items={items}/>))}
    </div>
    </>
  )
}

export default UpdatedComponent(Searched);
