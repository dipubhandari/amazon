import emailjs from 'emailjs-com'
 import React from 'react'
import Header from '../header/Header'
import GradeIcon from '@mui/icons-material/Grade'
import { useSelector } from 'react-redux'
import './checkout.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Person, Email, AddLocation, FolderZip } from '@mui/icons-material'
import { LocationCity, Phone } from '@material-ui/icons'
const Checkout = (props) => {
  //getting the products from the store using redux and useselector hooks
  const Pro = useSelector((state) => {
    return state
  })
  // variable for remove from cart and to render component so that it update on the spot 
  const [info, setInfo] = useState(false)
  // state for the products details from store add by use
  const [PRODUCTS, setProducts] = useState(Pro.cartReducer.cartData)
  // setting the products once product is removed 
  React.useEffect(() => {
    setProducts(Pro.cartReducer.cartData)
  }, [info])

  // calculation starts

  const getNoOfProducts = (e, id) => {
    const no = e.target.value
    // console.log(no)

    //  updating the no of product in Products object in specific id from above
    PRODUCTS.forEach((elem) => {
      console.log(elem.id == id)
      if (elem.id == id) {
        elem.quantity = no
      }
    })
  }
  let totals = 0;
  console.log("totol price")
  PRODUCTS.forEach((elem) => {
    totals += parseInt(elem.quantity) * parseInt(elem.mrp)
  }
  )
  // CALCULATION OF PRICE
  let [total, setTota] = useState(0)

  const totalFun = () => {
    let totals = 0;
    PRODUCTS.forEach((elem) => {
      totals += parseInt(elem.quantity) * parseInt(elem.mrp)
    }
    )
    setTota(totals)
    // console.log(total)
  }
  // totalFun()
  useEffect(() => {
    let total = 0;
    Pro.cartReducer.cartData.forEach((elem) => {
      total += parseInt(elem.quantity) * parseInt(elem.mrp)
    }
    )
    console.log(total)
    setTota(total)
  }, [info])


  useEffect(() => {
    console.log("render")

  }, [info])

  // calculation ends
  // getting data from user for order

  const [userfield, setInput] = useState({})

  const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value 

        setInput({...userfield,[name]:value})
        console.log(userfield)
  }
const handleSubmit = (e)=>{

  e.preventDefault()
  const send = emailjs.sendForm("service_flxo0cp", "template_i0f75d6", e.target,'tOO63CeP_rCzGDaVR').then(()=>{


  }).catch((error)=>{
    console.log(error)
  })

   
}
  
  return (
    <>
      <Header length={Pro.cartReducer.cartData.length} />
      <div className="aid">
        <div className="aidImage">
          <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/HBH_2022/Amazon_HBH_Storefront-Banner-M-1242x450-EN.jpg" alt="" width='89%' height='100px' />

        </div>
        <div className="sub__total">
          <b> Sub Total ({Pro.cartReducer.cartData.length} items): ${total}</b>

          {
            // if exist in cart how Continue button if not then show 
            // shopping button

            (Pro.cartReducer.cartData.length > 0) ?
              <button> <Link to='/checkout' className='hello'> Click To Purchase</Link></button>

              // {/*</button>*/}
              :
              <button>Pay ${total}</button>

          }

        </div>
      </div>

      {/* payment form */}
      <div className="payment">

        <section className="details">

          <form action=""onSubmit={handleSubmit}>

            <div className='form__content'>
              <label htmlFor=""> <Person /> Name</label>
              <input type="text"
                onChange={handleChange}
                name='name'
                placeholder='Enter Name'
              /> </div>


            <div className='form__content'>
              <label htmlFor=""><Email />email</label>
              <input
                onChange={handleChange}

                type="text"
                // className='form__content'
                name='email'
                placeholder='Email' />
            </div>


            <div className='form__content'>
              <label htmlFor=""><AddLocation />Address</label>
              <input type="text"
                onChange={handleChange}

                name='address'
                placeholder='Adress' /> </div>




            <div className='form__content'>
              <label htmlFor=""><Phone />Phone Number</label>
              <input type="text"
                onChange={handleChange}


                name='ph'
                placeholder='Ph No' />
            </div>


            <div className='form__content'>
              <label htmlFor=""> <FolderZip /> ZIP CODE</label>
              <input type="text"
                onChange={handleChange}

                name='code'
                placeholder='POSTAL CODE' /> </div>

            <div className="form__content">
              <input type="submit" value="Confirm Payment"/>
            </div>
          </form>
        </section>
        <section className="details">

          <form action="">

            <div className='form__content'>
              <label htmlFor="">PAYMENT METHOD Accept cards</label>
              <input type="button" value='VISA CARD / PAY PAL / KHALTI' />
            </div>


            <div className='form__content'>
              <label htmlFor="">Name on card</label>
              <input
                type="text"
                // className='form__content'
                
                name='email'
                placeholder='Name on card' />
            </div>


            <div className='form__content'>
              <label htmlFor="">Credit Card Number</label>
              <input type="text"
                name='email'
                placeholder='2222-5555-3333' /> </div>


            <div

              className='form__content'
            >
              <label htmlFor="">Expiry year</label>
              <input type="text"
                name='email'
                placeholder='EX-YEAR' /> </div>


            <div className='form__content'>
              <label htmlFor="">Card expiry month</label>
              <input type="text"

                name='email'
                placeholder='card expiry' />
            </div>


            <div className='form__content'>
              <label htmlFor="">cc-vv</label>
              <input type="text"
                name='email'
                placeholder='CC-VV' /> </div>
          </form>
        </section>
      </div>



      {PRODUCTS.map((element, index) => {
        return <>
          <div className="add__container">
            <div className="leftCartImage">
              <img src={element.img} alt="" />
            </div>
            <div className="rightCart">
              <div>{element.name}</div>
              <p className='gradeicon'> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /></p>
              <span>Price: $ {element.mrp}</span>
              <section className="inc__dec">
                <span>Quantity:</span>
                <input
                  placeholder={element.quantity}
                  type="number"
                  onChange={(e) => {
                    getNoOfProducts(e, element.id);
                    totalFun();
                  }
                  }
                  min={1}
                  max={10000}
                  // value={element.quantity}
                  className='quantity' />
                {/* <select><option value="1">1</option><option value="2">2</option><option value="1">3</option><option value="4">4</option><option value="5">5</option></select> */}
              </section><button
                onClick={

                  () => {
                    props.REMOVE_TO_CART(element.id)
                    setInfo(Math.random())

                  }

                }
                className='hatau'
              >Remove</button>
            </div>
          </div>
        </>
      })

      }



    </>
  )
}

export default Checkout