import './Header.css';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useSelector,useDispatch} from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Header = ({props}) => {
   

  const store = useSelector((state)=>{
    return state
  })
    const howmany = store.cartReducer.cartData.length
  
    return (
        <div className='header'>
            <Link to='/' className="logo">
                <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578" alt="" width='100px' height="auto" />
            </Link>
            <div className="wheredeliver">
                <LocationOnIcon />
                {/*  */}
                <span className='deliverDiv'>

                    Deliver to
                    <b>Nepal</b>
                </span>
            </div>
            <div className="searchfield">
                <button>All</button>
                <input type="text" className='searchinput' />
                <section className="searchIcon">
                    <button className='search'>  <SearchIcon /></button>
                </section>

            </div>

            <div className="hello" id="user">


                <Link to='/login' className="hello"> <h4>Hello,<span> sign in</span></h4></Link>
            </div>
            <div className="order">
                <span>All </span><b><Link to='/orders' className='hello'>ORDERS</Link> </b>
            </div>

            <div className="cartfirst_div">
                <small className='notification'>{howmany || 0}</small>
                <Link to="/cart" className='cart'> <ShoppingCartIcon />               <span>Cart</span>
                </Link>
            </div>
        </div>
    )
}

export default Header