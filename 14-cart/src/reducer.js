// Dispatch actions
export const ACTIONS = {
  UPDATE_CART: 'update-cart-items',
  CLEAR_CART: 'delete-cart-items',
  REMOVE: 'remove-item',
  CHANGE_AMOUNT: 'change-amount',
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  UPDATE_AMOUNT_AND_PRICE: 'update-amount-and-price',
}

const removeSingleProduct = (items, id) => items.filter((item) => item.id !== id)

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CART: {
      const { updatedItems } = action.payload
      return {
        ...state,
        cartItems: updatedItems,
        loading: false,
      }
    }
    case ACTIONS.CLEAR_CART:
      return { ...state, cartItems: [], total: 0, amount: 0 }
    case ACTIONS.REMOVE: {
      const updatedItems = removeSingleProduct(state.cartItems, action.payload.productId)
      return {
        ...state,
        cartItems: updatedItems,
      }
    }
    case ACTIONS.CHANGE_AMOUNT: {
      const { productId, changeType } = action.payload
      const updatedItems = state.cartItems
        .map((item) => {
          if (item.id === productId)
            return {
              ...item,
              amount: changeType === 'increment' ? item.amount + 1 : item.amount - 1,
            }
          return item
        })
        .filter((item) => item.amount !== 0)
      return {
        ...state,
        cartItems: updatedItems,
      }
    }
    case ACTIONS.UPDATE_AMOUNT_AND_PRICE: {
      const { totalPrice, totalAmount } = action.payload
      return { ...state, total: totalPrice, amount: totalAmount }
    }
    default:
      throw new Error('No matching action type found!')
  }
}
