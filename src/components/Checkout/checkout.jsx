import React from 'react'
import Header from '../header/Header'
import GradeIcon from '@mui/icons-material/Grade'
import { useSelector } from 'react-redux'
import '../Cart/CssForCart.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Checkout = (props) => {
    //getting the products from the store using redux and useselector hooks
    const Pro = useSelector((state) => {       return state  })
// total after the proceed to checkout

const [total,setTota] = useState(0)
    useEffect(() => {
        let total = 0;
        Pro.cartReducer.cartData.forEach((elem) => {
            total += parseInt(elem.quantity) * parseInt(elem.mrp)
        }
        )
        console.log(total)
        setTota(total)
    }, [])

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
                    <b> Sub Total ({Pro.cartReducer.cartData.length} items):  
                    ${total} </b>

                 
                     

                </div>
            </div>
           

           {/*  */}
        </>
    )
} 

export default Checkout