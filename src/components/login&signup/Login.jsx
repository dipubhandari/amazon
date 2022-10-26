import React from 'react'
import './LR.css'

const Login = () => {
  return (
    <div className='containerloginx'>
      <section className="containerlogin"> <br/>
        <section className="content">
          <h1 className="login_title"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRNpR6wsD8fPQQ19EWJa93PmoGHIDscU0eQ&usqp=CAU" alt="" /></span> </h1>
          <section>
            <form method="post" className=" form_login">
              <input type="text" name="username" placeholder=" Enter Email" /> 
              <input type="text" name="password" placeholder="Enter Password" />
              <input className="login_btn" type="submit" value="Login" />
             <p className='logincondition'> <input type='checkbox' required=''/> By Signing up you are agreeing our policies and privacy</p> <a href="/signup" className=" signup_text">Create</a>
            </form>
          </section>
        </section>
      </section>

    </div>
  )
}

export default Login