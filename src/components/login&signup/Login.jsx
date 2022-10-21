import React from 'react'
import './LR.css'

const Login = () => {
  return (
    <div>
      <section className="container"> <br/>
        <section className="content">
          <h1 className="login_title"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqGQTQ3FusJOaIcrrpeMDc6ZfBCtxfsAAzA&usqp=CAU" alt="" /></span> </h1>
          <section>
            <form method="post" className=" form_login">
              <input type="text" name="username" placeholder=" Enter Username" /> 
              <input type="text" name="password" placeholder="Enter Password" />
              <input className="login_btn" type="submit" value="Login" />
              <a href="/signup" className="signup_text">Create</a>
            </form>
          </section>
        </section>
      </section>

    </div>
  )
}

export default Login