import React, { useEffect } from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Payment } from "./components/Payment/Payment";
import Login from "./components/login&signup/Login";
import Register from "./components/login&signup/Register";
import Allorder from "./components/UserOrders/Allorder";
import Cart from "./redux/Containers/Cartcontainer";
import Checkout from "./components/Checkout/checkout";
import axios from "axios";
import SERVER_URL from "./config";

const App = () => {
  // islogged in state
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  useEffect(() => {
    // Check if the frontend connected to backend
    async function checkApp() {
      await axios
        .get(`${SERVER_URL}/api/check`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error connecting to the backend:", error);
        });
    }
    checkApp();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          {/* if user Logged in show checkout page else show homepage */}
          <Route
            path="/checkout"
            element={isLoggedIn ? <Checkout /> : <Login />}
          />
          <Route path="/orders" element={<Allorder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
