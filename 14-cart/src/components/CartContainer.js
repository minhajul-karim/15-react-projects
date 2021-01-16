import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'

const CartContainer = () => {
  const { cartItems, total, clearCart } = useGlobalContext()
  if (cartItems.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          const { id, img, title, price, amount } = item
          return <CartItem key={id} id={id} img={img} title={title} price={price} amount={amount} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
