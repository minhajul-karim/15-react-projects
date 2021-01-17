import React, { useState, useContext, useReducer, useEffect } from 'react'
import { ACTIONS, reducer } from './reducer'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const initialState = {
    loading: true,
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

  // Increment-decrement amount
  const changeAmount = (productId, changeType) => {
    dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: { productId, changeType } })
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

  // Calculate total price and amount of products
  useEffect(() => {
    const reducedItems = state.cartItems.reduce(
      (accumulator, curVal) => {
        const { price, amount } = curVal
        accumulator.totalPrice += parseFloat(price) * amount
        accumulator.totalAmount += amount
        return accumulator
      },
      { totalPrice: 0, totalAmount: 0 }
    )
    const { totalPrice, totalAmount } = reducedItems
    dispatch({
      type: ACTIONS.UPDATE_AMOUNT_AND_PRICE,
      payload: { totalPrice: totalPrice.toFixed(2), totalAmount },
    })
  }, [state.cartItems])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        changeAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
