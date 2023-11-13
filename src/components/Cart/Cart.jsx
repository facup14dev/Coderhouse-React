import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'

const Cart = () => {

  const { cart, clearCart } = useContext(CartContext)

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

      {/* { cart ? <button onClick={clearCart}> <span>VACIAR CART</span> </button> : <button> <span>VOLVER AL INICIO</span> </button>  } */}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>$  {} </p>
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

    </div>

  )


}

export default Cart