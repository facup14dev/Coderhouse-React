import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import SendOrders from '../SendOrders';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext)

  return (

    <div className="cartitems">

      {cart.length ?
        <div>
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
        </div> : ''
    } 

      {cart.map((productos) => {
        if (productos.id) {

          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={productos.img} alt="Tu producto" className='carticon-product-icon' />
                <p> {productos.name} </p>
                <p> $ {productos.price} </p>
                <p> {productos.size} </p>
                <p> {productos.cantidad} </p>
                <p> $ {productos.price * productos.cantidad} </p>
                <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => clearCart(productos.id, productos.size)} />
              </div>
              <hr />

            </div>

          )
        }
      })}

      {cart.length ?
        (
          <SendOrders />
        ) : (
          <div className='back'>
            <img src="../../src/assets/images/empty-cart.png" alt="Carrito vacio" />
            <h1>Su carrito esta vacio</h1>
            <Link to={"/"} >
              <button className='btn-home'>REGRESAR AL INICIO</button>
            </Link>
          </div>

        )
      }
    </div >


  )


}


export default Cart