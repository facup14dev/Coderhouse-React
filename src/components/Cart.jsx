import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const { cart } = useContext(CartContext)

  return (

    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Titulo</p>
        <p>Precio</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cart.map((productos) => {
        if (productos.id > 0) {

          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src= {productos.img} alt="" className='carticon-product-icon'/>
                <p> {productos.name} </p>
                <p> {productos.price} </p>
                <button className="cartitems-quantity"> {productos.cantidad} </button>
                <p> {productos.price * productos.cantidad} </p>
                <p>X</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>$ {0} </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEDER A LA COMPRA</button>
        </div>
        <div className="cartitems-promocode">
          <p>si tienes un codigo, ingresalo</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>

  )


}

export default Cart


// return cart.map((productos) => {
//   return (
//     <div key={productos.id}>
//       <h2> {productos.name} </h2>
//       <h3> {productos.cantidad} </h3>
//       <h3> </h3>
//     </div>
//   )


// })