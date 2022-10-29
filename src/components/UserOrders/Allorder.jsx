import React from 'react'
import Header from '../header/Header'
import GradeIcon from '@mui/icons-material/Grade'
import '../Cart/CssForCart.css'
import { Link } from 'react-router-dom'
const Allorder = () => {
    return (
        <>
            <Header />
            {/* adds start */}
            <div className="aid">
                <div className="aidImage">
                    <img src="" alt="" width='89%' height='100px' />
                    <div className='asket_title'>
                        Your All Orders Till Now
                    </div>
                </div>
                <div className="sub__total">
                    <b>Need some Products</b>
                    {/* <small>  <input type="checkbox" /> Check the order Items Carefully</small> */}
                    <Link to='/' className='continue__shopping__button'>Continue Shopping</Link>
                </div>
            </div>
            {/* aid  */}

            {/* items on the cart ..*/}
            <div className="add__container">

                <div className="leftCartImage">
                    <img src="" alt="" />
                </div>
                <div className="rightCart">

                    <div>The Name of the</div>
                    <p className='gradeicon'> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /></p>

                    <span>Price: $9999</span>


                    <button className='hatau'> <Link to='/' className='hello'>Shop</Link> </button>
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
                    <button className='hatau'> <Link to='/' className='hello'>Shop</Link> </button>
                </div>
            </div>
            {/* items on the cart ? */}

        </>
    )
}

export default Allorder