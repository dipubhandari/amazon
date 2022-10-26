import React from 'react'
import Header from '../header/Header'
import GradeIcon from '@mui/icons-material/Grade'
import './CssForCart.css'
const Cart = () => {
  return (
    <>
      <Header />
      <div className="aid">
        <div className="aidImage">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/HBH_2022/Amazon_HBH_Storefront-Banner-M-1242x450-EN.jpg" alt="" width='89%' height='100px' />
          <div className='asket_title'>
            Your Shopping Basket
          </div>
        </div>
        <div className="sub__total">
          <b> Sub Total (0 items): $90</b>
          <button>Click To Purchase</button>
        </div>
      </div>
      <div className="add__container">

        <div className="leftCartImage">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2FfYmz90UWEEx3FRjMwlvvxsqA_klW__ww&usqp=CAU" alt="" />
        </div>
        <div className="rightCart">

          <div>The Name of the</div>
          <p className='gradeicon'> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /></p>
          <span>Price: $9999</span>
          <button className='hatau'>Remove</button>
        </div>
      </div>
      <div className="add__container">
        <div className="leftCartImage">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2FfYmz90UWEEx3FRjMwlvvxsqA_klW__ww&usqp=CAU" alt="" />
        </div>
        <div className="rightCart">
          <div>The Name of the</div>
          <p className='gradeicon'> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /></p>
          <span>Price: $9999</span>
          <section className="inc__dec">
            <span>Quantity:</span>
            <select><option value="1">1</option><option value="2">2</option><option value="1">3</option><option value="4">4</option><option value="5">5</option></select>
          </section><button className='hatau'>Remove</button>
        </div>
      </div>
    </>
  )
}

export default Cart