import React from 'react'
import './LR.css'
const Register = () => {
  return (
    <div>
          <section className="containerlogin"> <br/>
              <section className="content">
                  <h1 className="login_title"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqGQTQ3FusJOaIcrrpeMDc6ZfBCtxfsAAzA&usqp=CAU" alt="" /></span> <noframes></noframes></h1>
                  <section>
                      <form action="" method="post" className="form_login">
                          <input type="text" name="name" placeholder="Enter Full Name"/>
                          <input type="email" name="email" placeholder="Enter Email" />
                              <input type="text" name="ph" placeholder="Enter Phone No"/>
                          <input type="text" name="password" placeholder="Enter Password" />
                                      <input type="text" name="repeatPassword" placeholder="Repeat Password"/>


                                          <label for="age">Date Of Birth</label>
                                          <br/>
                                              <span className="age">
                                                  <select name="age">
                                                      <option value="2000">2000</option>
                                                      <option value="2001">2001</option>
                                                      <option value="20002">2002</option>
                                                      <option value="20003">2003</option>
                                                  </select>
                                                  <select>
                                                      <option value="January">Jan</option>
                                                      <option value="febraury">feb</option>
                                                      <option value="March">Mar</option>
                                                      <option value="April">April</option>
                                                  </select>

                                                  <select>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                      <option value="3">4</option>
                                                      <option value="4">4</option>
                                                  </select>
                                              </span>
                                              <input className="login_btn" type="submit" value="Create"/>
                                                  <a href="/login" className="login_text_signup">Login</a>
                                              </form>
                                          </section>
                                      </section>
                                  </section>

    </div>
  )
}

export default Register