import React from 'react'
import Header from '../header/Header'
import GradeIcon from '@mui/icons-material/Grade'
import { useSelector } from 'react-redux'
import './CssForCart.css'
import { useState } from 'react'
const Cart = (props) => {
  const Pro = useSelector((st) => {
    return st
  })
  const [info,setInfo] = useState(false)
  const [PRODUCTS, setProducts] = useState(Pro.cartReducer.cartData)
  React.useEffect(()=>{
    setProducts(Pro.cartReducer.cartData)
  },[info])

  return (
    <>
      <Header length={Pro.cartReducer.cartData.length} />
      <div className="aid">
        <div className="aidImage">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/HBH_2022/Amazon_HBH_Storefront-Banner-M-1242x450-EN.jpg" alt="" width='89%' height='100px' />
          <div className='asket_title'>
            Your Shopping Basket
          </div>
        </div>
        <div className="sub__total">
          <b> Sub Total ({Pro.cartReducer.cartData.length} items): $90</b>
          <button>Click To Purchase</button>
        </div>
      </div>
      {PRODUCTS.map((element, index) => {
        return <>
          <div className="add__container">
            <div className="leftCartImage">
              <img src={element.img} alt="" />
            </div>
            <div className="rightCart">
              <div>{element.name}</div>
              <p className='gradeicon'> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /></p>
              <span>Price: $ {element.mrp}</span>
              <section className="inc__dec">
                <span>Quantity:</span>
                <select><option value="1">1</option><option value="2">2</option><option value="1">3</option><option value="4">4</option><option value="5">5</option></select>
              </section><button 
                onClick={
              
                  ()=>{
                   props.REMOVE_TO_CART(element.id) 
                   setInfo(Math.random()) 
                  
                  }
               
                }
              className='hatau'
              >Remove</button>
            </div>
          </div>
        </>
      })

      }

    </>
  )
}

export default Cart