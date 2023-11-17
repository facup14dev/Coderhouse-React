import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom';
import './BuyOut.css'


const BuyOut = () => {

  const { setCountCart, setCart } = useContext(CartContext)

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [showForm, setShowForm] = useState(true);

  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(ordersCollection, order).then(({ id }) =>
      setOrderId(id))
    setCountCart(0)
    setShowForm(false)
    setCart([])
  }

  const order = {
    nombre,
    email
  }

  const ordersCollection = collection(db, 'Orden')



  return (

    <div>


      {showForm && (

        <form action="" onSubmit={handleSubmit} className='frm-order'>

          <h1 className='titulo-categoria'>DATOS PARA SU COMPRA</h1>
          <hr className='hr'></hr>

          <div className="name">
            <label htmlFor="inp-name">Nombre</label>
            <input id='inp-name' className='inp-name' type="text" placeholder='Nombre' required onChange={(e) => { setNombre(e.target.value); handleInputChange(e) }} />
          </div>
          <div className="name">

            <label htmlFor="inp-mail">Email</label>
            <input id='inp-mail' className='inp-mail' type="email" placeholder='Email' required onChange={(e) => { setEmail(e.target.value); handleInputChange(e) }} />
          </div>
          <div className="name">

            <label htmlFor="inp-mail">Dirección</label>
            <input id='inp-mail' className='inp-mail' type="text" placeholder='Dirección' onChange={(e) => { setEmail(e.target.value); handleInputChange(e) }} />
          </div>
          <div className="name">

            <label htmlFor="inp-mail">Telefono</label>
            <input id='inp-mail' className='inp-mail' type="number" placeholder='Telefono' onChange={(e) => { setEmail(e.target.value); handleInputChange(e) }} />
          </div>

          <button type="submit" className='btn-buy'>CONFIRMAR COMPRA</button>

        </form>
      )}


      {showForm ? '' :
        <div className="buyout">

          <img src="../src\assets\images\check.png" alt="Compra realiazada con exito." className='img-check' />
          <h1>¡Gracias por tu compra!</h1>
          <h4>Tu solicitud de compra fue recibida</h4>
          <p>Tu pedido se encuentra en proceso de validación, en breve recibiras un correo con el detalle de tu compra.</p>

          <h2 className='h2-order2'>Pueden hacer el seguimiento de tu compra con el siguiente número</h2>
          <h2 className='h2-order'>N° Orden de Compra: <span>{orderId}</span> </h2>

          <div className='back'>
            <Link to={"/"} >
              <button className='btn-compras'>REALIZA MAS COMPRAS</button>
            </Link>
          </div>

        </div>}

    </div>

  )
}

export default BuyOut