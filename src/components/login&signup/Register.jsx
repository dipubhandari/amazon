import axios from 'axios'
import React, { useState } from 'react'
import './LR.css'
const Register = () => {
    //  signup form details
    const [input, setInput] = React.useState({})

    const [mes, setMes] = useState("")
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...input, [name]: value })
        // console.log(input)
    }

    const handleSubmit = async (e) => {
        const url = '/signup'
        e.preventDefault()
        await axios.post(url, input)
            .then((response) => {
               setMes(response.data)
               if(response.data){
                setInput({})
               }
            })
            .catch((e) => {
                console.log(e)
            })
        // sending the user data to the back
    }

    return (
        <div>
            <section className="containerlogin"> <br />
                <section className="content">
                    <h1 className="login_title"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRNpR6wsD8fPQQ19EWJa93PmoGHIDscU0eQ&usqp=CAU" alt="" /></span> <noframes></noframes></h1>
                    <section>

                        <form action="" method="post"
                            onSubmit={handleSubmit}

                            className="form_login">

                            <input
                                type="text"

                                onChange={handleChange}
                                name="name"
                                required
                                placeholder="Enter Full Name"
                            />

                            <input
                                required
                                type="email"
                                onChange={handleChange}
                                name="email"
                                placeholder="Enter Email"
                            />
                            <input
                                required
                                type="text"
                                onChange={handleChange}
                                name="location"
                                placeholder="District/WardNumber/Village or city"
                            />
                            <input
                                type="text"
                                required
                                onChange={handleChange}
                                name="phone"
                                placeholder="Phone Number"
                            />

                            <input className="login_btn" type="submit" value="Create" />
                            <div className='msg'> {mes}</div>
                            <a href="/login" className="login_text_signup">Login</a>
                        </form>
                    </section>
                </section>
            </section>

        </div>
    )
}

export default Register