import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import './BuyOut.css'


const BuyOut = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [showForm, setShowForm] = useState(true);

  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(ordersCollection, order).then(({ id }) =>
      setOrderId(id))
    setShowForm(false)
  }

  const order = {
    nombre,
    email
  }

  const ordersCollection = collection(db, 'Orden')

  console.log(showForm)

  return (

    <div>


      {showForm && (

        <form action="" onSubmit={handleSubmit} className='frm-order'>

          <h1>Sus datos</h1>

          <div className="name">
            <label htmlFor="inp-name">Nombre</label>
            <input id='inp-name' className='inp-name' type="text" placeholder='Nombre' required onChange={(e) => { setNombre(e.target.value); handleInputChange(e) }} />
          </div>
          <div className="name">

            <label htmlFor="inp-mail">Email</label>
            <input id='inp-mail' className='inp-mail' type="email" placeholder='Email' required onChange={(e) => { setEmail(e.target.value); handleInputChange(e) }} />
          </div>

          <button type="submit" className='btn-buy'>Enviar</button>

        </form>
      )}


      {showForm ? '' :
        <div className="buyout">

          <img src="../src\assets\images\check.png" alt="Compra realiazada con exito." className='img-check' />
          <h1>¡Gracias por tu compra!</h1>
          <h4>Tu solicitud de compra fue recibida</h4>
          <p>Tu pedido se encuentra en proceso de validación, en breve recibiras un correo con el detalle de tu compra.</p>

          <h2>N° Orden de Compra: {orderId} </h2>

        </div> }

    </div>

  )
}

export default BuyOut