import React from 'react'

const Cart = () => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Productos</p>
        <p>Titulo</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      <div>
        <div className="cartitems-format">
          <img src="" alt="" className='carticon-product-icon' />
          <p></p>
          <p></p>
          <button className='cartitems-quantity'></button>
          <p></p>
        </div>
        <hr />
      </div>
      
    </div>
  )
}

export default Cart