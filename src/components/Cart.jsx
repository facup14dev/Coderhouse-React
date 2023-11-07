import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import Checkout from './Checkout'

const Cart = () => {

  const { cart } = useContext(CartContext)

  console.log(cart)

  return (

    <div className="cartitems">

      <h1>Tu compra</h1>

      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Nombre</p>
        <p>Precio</p>
        <p>Talle</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Eliminar</p>
      </div>
      <hr />

      {cart.map((productos) => {
        if (productos.id) {

          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={productos.img} alt="" className='carticon-product-icon' />
                <p> {productos.name} </p>
                <p> $ {productos.price} </p>
                <p> {productos.size} </p>
                <button className="cartitems-quantity"> {productos.cantidad} </button>
                <p> $ {productos.price * productos.cantidad} </p>
                <p>X</p>
              </div>
              <hr />
            </div>
          )
        }
      })}

      {cart.length < 1 ? (<h1 className='cart-empty'>Su carrito de compras está vacío</h1>) : (<Checkout />)}

    </div>

  )


}

export default Cart