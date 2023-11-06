import React, { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const {id} = useParams()
  const [producto, setProducto] = useState([])


  useEffect(() => {

    const db = getFirestore()

    const item = doc(db, "ropa", `${id}`)

    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProducto(docs)
      }
    })
    
  })

  return (
    <>

      <ItemDetail productos={producto} />

    </>
  )
}

export default ItemDetailContainer