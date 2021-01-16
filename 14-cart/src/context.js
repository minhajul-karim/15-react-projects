import React, { useState, useContext, useReducer, useEffect } from 'react'

// Dispatch actions
const ACTIONS = {
  UPDATE_CART: 'update-cart-items',
  CLEAR_CART: 'delete-cart-items',
  REMOVE: 'remove-item',
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

// Get total price
const getTotal = (items) =>
  items.reduce((accumulator, currentVal) => accumulator + parseFloat(currentVal.price), 0)

const removeSingleProduct = (items, id) => items.filter((item) => item.id !== id)

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CART: {
      const { updatedItems } = action.payload
      return {
        ...state,
        cartItems: updatedItems,
        total: getTotal(updatedItems),
      }
    }
    case ACTIONS.CLEAR_CART:
      return { ...state, cartItems: [], total: 0, amount: 0 }
    case ACTIONS.REMOVE: {
      const updatedItems = removeSingleProduct(state.cartItems, action.payload.productId)
      return {
        ...state,
        cartItems: updatedItems,
        total: getTotal(updatedItems),
      }
    }
    case ACTIONS.INCREMENT: {
      const { productId } = action.payload
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === productId)
          return {
            ...item,
            amount: item.amount + 1,
          }
        return item
      })
      return { ...state, cartItems: updatedItems }
    }
    case ACTIONS.DECREMENT: {
      const { productId } = action.payload
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === productId && item.amount > 1) return { ...item, amount: item.amount - 1 }
        return item
      })
      return { ...state, cartItems: updatedItems }
    }
    default:
      return state
  }
}

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const initialState = {
    loading: false,
    cartItems,
    total: 0,
    amount: 0,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // Load cart data frop API
  const fetchData = async () => {
    const response = await fetch('https://course-api.com/react-useReducer-cart-project')
    const items = await response.json()
    setCartItems(items)
  }

  // Clears all items from the cart
  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART })
  }

  // Remove a single item
  const remove = (productId) => {
    dispatch({ type: ACTIONS.REMOVE, payload: { productId } })
  }

  // Increment amount of product
  const increment = (productId) => {
    dispatch({ type: ACTIONS.INCREMENT, payload: { productId } })
  }

  const decrement = (productId) => {
    dispatch({ type: ACTIONS.DECREMENT, payload: { productId } })
  }

  // Fetch cart data
  useEffect(() => {
    fetchData()
  }, [])

  // Update context values
  useEffect(() => {
    if (cartItems.length !== 0)
      dispatch({
        type: ACTIONS.UPDATE_CART,
        payload: { updatedItems: cartItems, amount: cartItems.length },
      })
  }, [cartItems])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increment,
        decrement,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
