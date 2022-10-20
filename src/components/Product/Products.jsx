import GradeIcon from '@mui/icons-material/Grade';
import React from 'react'
import './Product.css'
const Product = () => {
    return (




        <div className='container'>

            <div className='data'>

                <span className='data-name'>chain</span>
                <span className='price'>$999</span>
                <b className='rating'> <GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon />

                    <GradeIcon /></b>{/*<GradeIcon />*/}
                <span className="datapic">
                    <img src="https://oneononepharmacy.com/wp-content/uploads/cetamol-cold-child-daytime.jpg" alt="" className="image" />
                </span>


                <button className='addBtn'>Add to Cart</button>
            </div>






            <div className='data'>

                <span className='data-name'>chain</span>
                <span className='price'>$999</span>
                <b className='rating'> <GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon />

                    <GradeIcon /></b>{/*<GradeIcon />*/}
                <span className="datapic">
                    <img src="https://oneononepharmacy.com/wp-content/uploads/cetamol-cold-child-daytime.jpg" alt="" className="image" />
                </span>


                <button className='addBtn'>Add to Cart</button>
            </div>


        </div>

    )
}

export default Product