import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'
import Loader from './Loader/Loader'
import Banner from '../../public/images/banner.jpg'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('')
  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, 'ropa')

    getDocs(itemsCollection)
      .then((response) => {
        setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false);
      })

  }, [])

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProductos = () => {
    let sorted = [...productos];

    if (sortBy === 'priceasc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'pricedsc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  };

  const productoFiltrado = productos.filter((producto) => producto.category == category)

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <div className='itemListContainer'>

          {category ? '' : (
            <>
              <img className='banner' src={Banner} alt="banner de ofertas" />

              <h1 className='titulo-categoria'>Todos nuestros productos</h1>

              <label className='lbl-filter'>
                Ordenar por: 
                <select className='slt-filter' value={sortBy} onChange={handleSortChange}>
                  <option value=''>Seleccione...</option>
                  <option value='priceasc'>Precio ↓</option>
                  <option value='pricedsc'>Precio ↑</option>
                  <option value='name'>Nombre</option>
                </select>
              </label>
            </>
          )}
          <h1 className='titulo-categoria'> {category ? `Nuestros productos de ${category}` : <></>} </h1>

          {category ? <ItemList productos={productoFiltrado} /> : <ItemList productos={sortedProductos()} />}

        </div>
      )}
    </>
  )

}

export default ItemListContainer