import React from 'react'
import './ItemCount.css'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Counter = ({ productos }) => {

  const { count, decrementCount, incrementCount, selectedSize, addCart, handleSizeClick } = useContext(CartContext)

  //toastify
  const notify = () => toast.success("¡Se añadio su producto al carrito!", {position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});

  return (


    <div className='container'>

      <div className="productdisplay-right-size">
        <h1>Seleccionar Talle</h1>
        <div className="productdisplay-right-sizes">
          <div className={`size ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeClick('S')}>
            S
          </div>
          <div className={`size ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeClick('M')}>
            M
          </div>
          <div className={`size ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeClick('L')}>
            L
          </div>
          <div className={`size ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XL')}>
            XL
          </div>
          <div className={`size ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => handleSizeClick('XXL')}>
            XXL
          </div>
        </div>
      </div>

      <p className='p-cantidad'>Cantidad</p>

      <div className="Cantidad">
        <button className='Btn' onClick={decrementCount}>-</button>
        <strong>{count}</strong>
        <button className='Btn' onClick={incrementCount}>+</button>

        <button className="CartBtn" onClick={() => { addCart(productos); notify() }}>
          <span className="IconContainer">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg>
          </span>
          <p className="text">Añadir al carrito</p>
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} limit={1} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>

  )
}

export default Counter