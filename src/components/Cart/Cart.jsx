import React from 'react'
import Header from '../header/Header'
import './CssForCart.css'
const Cart = () => {
  return (
    <>
      <Header />
{/* adds start */}
      <div className="aid">
        <div className="aidImage">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/HBH_2022/Amazon_HBH_Storefront-Banner-M-1242x450-EN.jpg" alt="" width='89%' height='100px' />
          <div className='asket_title'>
            Your Shopping Basket
          </div>
        </div>
        <div className="sub__total">
        <div className="row">

        </div>
        </div>
      </div>
      {/* aid  */}


    </>
  )
}

export default Cart