import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import '../components/Cart/Cart.css'
import { Link } from 'react-router-dom'

const SendOrders = () => {

    const { cartTotal } = useContext(CartContext)

    return (
        <div>
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>$  {cartTotal()} </p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Envio</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>$  {cartTotal()}</h3>
                        </div>
                    </div>
                </div>
                <div className="cartitems-promocode">

                    {/* Proximamente... para aplicar descuentos*/}
                    {/* <div className="cartitems-promobox"> */}
                    {/* <h3> | Si tienes un código de descuento, ingreselo aqui</h3> */}
                    {/* <input className='inp-dsc' type="text" placeholder='Codigo de Promoción' />
                        <button className='btn-dsc' onClick={aplicarDescuento()}>Aplicar Descuento</button> */}
                    {/* </div> */}

                    <Link to={"/buyout"}>
                        <button className='btn-buy'>FINALIZAR COMPRA</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SendOrders