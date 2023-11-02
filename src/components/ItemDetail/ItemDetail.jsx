import React from 'react'
import { useParams } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ productos }) => {

  const { id } = useParams()

  const productoFiltrado = productos.filter((producto) => producto.id == id)

  return (
    <>

      {
        productoFiltrado.map((p) => {
          return (
            <div className='productdisplay'>
              <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                  <img src={p.img} alt="" />
                  <img src={p.img} alt="" />
                  <img src={p.img} alt="" />
                  <img src={p.img} alt="" />
                </div>
                <div className="productdisplay-img">
                  <img className='productdisplay-main-img' src={p.img} alt="" />
                </div>

              </div>
              <div className="productdisplay-right">
                <h1>{p.name}</h1>
                <div className="productdisplay-right-prices">
                  <div className="productdisplay-right-price-old"> $ {p.price}</div>
                  <div className="productdisplay-right-price-new"> $ {p.priceDiscount}</div>
                </div>
                <div className="productdisplay-right-description">
                  {p.description}
                </div>
                <div className="productdisplay-right-size">
                  <h1>Seleccionar Talle</h1>
                  <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                  </div>
                </div>

                <ItemCount productos={p} />

              </div>
            </div>
          )
        })
      }





    </>
  )

}

export default ItemDetail