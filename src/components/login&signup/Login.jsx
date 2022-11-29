import React from 'react'
import { useState } from 'react'
import './LR.css'
import axios from 'axios'

const Login = () => {
  // inputs from the login form

  const [loginInput, setLoginInput] = useState({})

  // function on change input by users

  const handleChange = (e) => {

    setLoginInput({ user: e.target.value })
    console.log(loginInput)
  }

  // check login email if exist in database redirect to homepage else ...

  const login = async () => {
    const url = '/login'

    await axios.post(url, loginInput)
      .then((response) => {
        console.log(response)
      })


  }

  //
  return (
    <div className='containerloginx'>
      <section className="containerlogin"> <br />
        <section className="content">
          <h1 className="login_title"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRNpR6wsD8fPQQ19EWJa93PmoGHIDscU0eQ&usqp=CAU" alt="" /></span> </h1>
          <section>
            <form method="post" className=" form_login">
              <input
                onChange={handleChange}
                type="text"
                name="email"
                value={loginInput.user || ''}
                placeholder=" Enter Email" />

              {/* <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="Enter Password"
              /> */}

              <input className="login_btn"
                type="submit" value="Login"
                onClick={login}
              />

              <p className='logincondition'>
                <input type='checkbox' required='' /> By Signing up you are agreeing our policies and privacy</p> <a href="/signup" className=" signup_text">Create</a>
            </form>
          </section>
        </section>
      </section>
    </div>
  )
}

export default Login