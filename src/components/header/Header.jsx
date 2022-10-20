import './Header.css';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" alt="" width='100px' height="auto" />
            </div>
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
                <b>Hello, sign in</b>
                <span>Account & List</span>
            </div>
            <div className="order">
                <span>Returns </span><b>& Order</b>
            </div>
            <div className="cart">
     <ShoppingCartIcon />
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Header