import React from 'react'
import Home from './Home'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Payment } from './components/Payment/Payment'; 
import Login from './components/login&signup/Login'
import Register from './components/login&signup/Register'
import Allorder from './components/UserOrders/Allorder';
import Cart from "./redux/Containers/Cartcontainer"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes><Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Register />} />
                    <Route path='payment' element={<Payment />} />
                    <Route path='/cart' element={< Cart/>} />
                    <Route path='/orders' element={<Allorder />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App