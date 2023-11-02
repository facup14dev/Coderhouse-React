import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const { count, cart } = useContext(CartContext)

  return cart.map((productos) => {
    return (
      <div key={productos.id}>
        <h2> {productos.name} </h2>
        <h3> {productos.cantidad} </h3>
      </div>
    )


  })

}

export default Cart