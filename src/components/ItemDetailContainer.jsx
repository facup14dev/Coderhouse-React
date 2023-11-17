import React, { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import Loader from './Loader/Loader'


const ItemDetailContainer = () => {

  const { id } = useParams()
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);

  //Cargo los productos de la base de datos de Firebase.
  const getProducto = () => {
    const db = getFirestore()
    const item = doc(db, "ropa", `${id}`)
    getDoc(item)
      .then((response) => {
        setProducto({ id: response.id, ...response.data() })
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    getProducto()
  }, [id])

  return (
    <>

      { loading ? (
        <Loader/>
      ) : ( 
      <ItemDetail productos={producto} />
      )}

    </>
  )
}

export default ItemDetailContainer