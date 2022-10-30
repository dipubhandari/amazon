import GradeIcon from '@mui/icons-material/Grade';
import React from 'react'
import ProductDetails from './Productdata';
import './Product.css'
const Product = (props) => {

    return (
        <div className='container'>
            {/*  */}
            {ProductDetails.map((product, index) => {
                return <div className='data'>

                    <span className='data-name'>{product.name}</span>
                    <span className='price'>${product.mrp}</span>
                    <b className='rating'> <GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon />

                        <GradeIcon /></b>{/*<GradeIcon />*/}
                    <span className="datapic">
                        <img src={product.img} alt="" className="image" />
                    </span>


                    <button
                        className='addBtn'

                        onClick={

                            () => {
                                props.ADD_TO_CART({
                                    id: product.id,
                                    quantity: 1, name: product.name,
                                    mrp: product.mrp, img: product.img
                                })
                            }
                        }>Add to Cart</button>
                </div>
            })}
      



        </div >

    )
}

export default Product