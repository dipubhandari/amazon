import Product from '../../components/Product/Products'
import { connect } from 'react-redux'
import { ADD_TO_CART_ACTION } from '../Services/Actions/action'
const mapStateToprops = state => ({})
const mapDispatchToProps = dispatch => ({
    ADD_TO_CART: data => dispatch(ADD_TO_CART_ACTION(data))
})

export default connect(mapStateToprops, mapDispatchToProps)(Product)