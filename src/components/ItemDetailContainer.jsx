import React, { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const { id } = useParams()
  const [producto, setProducto] = useState([])

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
  }

  useEffect(() => {
    getProducto()
  }, [id])

  return (
    <>

      <ItemDetail productos={producto} />

    </>
  )
}

export default ItemDetailContainer