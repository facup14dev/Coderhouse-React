import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const SendOrders = () => {

    const { cart, clearCart, cartTotal } = useContext(CartContext)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        nombre,
        email
    }

    const ordersCollection = collection(db, 'Orden')

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
                    <button>PROCEDER A LA COMPRA</button>
                </div>
                <div className="cartitems-promocode">
                    <p> | Si tienes un código de descuento, ingreselo aqui</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Codigo de Promoción' />
                        <button>Aplicar Descuento</button>

                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                            <button type="submit">Enviar</button>
                        </form>
                        <p>Su número de orden es: {orderId}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendOrders