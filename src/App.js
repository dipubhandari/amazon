import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login&signup/Login'
import Register from './components/login&signup/Register'

const App = () => {
    return (
        <div>
            

            <BrowserRouter>
                
                <Routes><Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Register/>} />
                </Routes>
            </BrowserRouter>



        </div>
    )
}

export default App