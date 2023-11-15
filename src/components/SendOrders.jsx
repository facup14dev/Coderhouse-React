import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import '../components/Cart/Cart.css'
import { Link } from 'react-router-dom'

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
                </div>
                <div className="cartitems-promocode">
                    <p> | Si tienes un código de descuento, ingreselo aqui</p>
                    <div className="cartitems-promobox">
                        <input className='inp-dsc' type="text" placeholder='Codigo de Promoción' />
                        <button className='btn-dsc' >Aplicar Descuento</button>

                        <form action="" className='frm-order'>

                            <h1>Sus datos</h1>
                            <div className="name">
                                <label htmlFor="inp-name">Nombre</label>
                                <input id='inp-name' className='inp-name' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="name">

                                <label htmlFor="inp-mail">Email</label>
                                <input id='inp-mail' className='inp-mail' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            {/* <button type="submit">Enviar</button> */}
                        </form>
                        {/* <p>Su número de orden es: {orderId}</p> */}
                    </div>
                </div>
            </div>

            <div className='buy-container'>
                <Link to={"/buyout"}>
                    <button className='btn-buy'>PROCEDER A LA COMPRA</button>
                </Link>
            </div>
        </div>
    )
}

export default SendOrders