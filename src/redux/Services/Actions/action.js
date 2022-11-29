
export const ADD_TO_CART_ACTION = (data) => {
    return {
        type: 'ADD_TO_CART',
        data: data
    }
}

export const REMOVE_TO_CART_ACTION = (remove) => {
    return {
        type: 'REMOVE_TO_CART',
        data: remove
    }
}