import React from 'react'
import './Checkout.css'

const Checkout = ( {productos}) => {

  return (
    <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Total</h1>
        <div>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>$  {0} </p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Envio</p>
            <p>Gratis</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>$  {0}</h3>
          </div>
        </div>
        <button>PROCEDER A LA COMPRA</button>
      </div>
      <div className="cartitems-promocode">
        <p> | Si tienes un código de descuento, ingreselo aqui</p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='Codigo de Promoción' />
          <button>Aplicar Descuento</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout