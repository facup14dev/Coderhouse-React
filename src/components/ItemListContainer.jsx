import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'
import Loader from './Loader/Loader'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
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

  const productoFiltrado = productos.filter((producto) => producto.category == category)

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <div className='itemListContainer'>

          {category ? '' : <img className='banner' src='../public\banner.jpg' alt="banner de ofertas" />}

          <h1 className='titulo-categoria'> {category ? `Nuestros productos de ${category}` : ''} </h1>

          {category ? <ItemList productos={productoFiltrado} /> : <ItemList productos={productos} />}

        </div>
      )
      }
    </>
  )

}

export default ItemListContainer