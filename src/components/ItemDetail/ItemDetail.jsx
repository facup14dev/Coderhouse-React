import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productos, id }) => {


  // const productoFiltrado = productos.filter((producto) => producto.id == id)

  // console.log(productos)

  return (
    <>

      <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={productos.img} alt="" />
            <img src={productos.img} alt="" />
            <img src={productos.img} alt="" />
            <img src={productos.img} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={productos.img} alt="" />
          </div>

        </div>
        <div className="productdisplay-right">
          <h1>{productos.name}</h1>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old"> $ {productos.price}</div>
            <div className="productdisplay-right-price-new"> $ {productos.priceDiscount}</div>
          </div>
          <div className="productdisplay-right-description">
            {productos.description}
          </div>

          <ItemCount productos={productos} id={id} />

        </div>
      </div>




    </>
  )

}

export default ItemDetail