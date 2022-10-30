const InitialState = {
  cartData: [],
}

export default function cartReducer(state = InitialState, action) {


  switch (action.type) {

    case 'ADD_TO_CART':
      let exist = true
      state.cartData.map((data) => {
        if (action.data['id'] == data['id']) {
          exist = false
        }
      }
      )
      if (exist) {
        return {

          ...state,
          cartData: [...state.cartData, action.data]
        }
      }
    
    case 'REMOVE_TO_CART': 
       const cart = state.cartData.filter((e)=>{
          return (e['id'] != action.data)
        })
      
    return {

          ...state,
          cartData: cart
        }
        
        break;
    default:

      return state
  }
}