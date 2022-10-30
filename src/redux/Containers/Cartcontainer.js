import Cart from '../../components/Cart/Cart';
import { connect } from 'react-redux'
import { REMOVE_TO_CART_ACTION } from '../Services/Actions/action'

const mapStateToprops = state => ({})
const mapDispatchToProps = dispatch => ({
    REMOVE_TO_CART: remove => dispatch(REMOVE_TO_CART_ACTION(remove))

})

export default connect(mapStateToprops, mapDispatchToProps)(Cart)