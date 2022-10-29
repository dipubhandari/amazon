// import 
const InitialState = {
  cartData: [],
}
export default function cartReducer(state = InitialState, action) {
  console.log(state.cartData.filter((item)=>{
return item == 0
  }))

  switch (action.type) {
    case 'ADD_TO_CART': return {
      ...state,
     
      cartData: [...state.cartData, action.data]
    }
    default:

      return state
  }
}