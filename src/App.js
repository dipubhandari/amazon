import React from 'react'
import Home from './Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login&signup/Login'
import Register from './components/login&signup/Register'
// import Checkoutcomponent from './components/Cart/Cart';
import Cart from './components/Cart/Cart';

const App = () => {
    return (
        <div>


            <BrowserRouter>

                <Routes><Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Register />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>



        </div>
    )
}

export default App