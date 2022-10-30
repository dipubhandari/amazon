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
      else {
       
      }





    case 'REMOVE_TO_CART': state.cartData.filter((removedCart) => {
      return { cartData: [removedCart != action.data] }
    })
    default:

      return state
  }
}