import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, 'ropa')

    getDocs(itemsCollection).then((snapshot) =>{
      const docs = snapshot.docs.map((doc) => doc.data())

      setProductos(docs)
    })
    
  },[])

  const productoFiltrado = productos.filter((producto) => producto.category == category)

  return (
    <>

      {category ? <ItemList productos={productoFiltrado} /> : <ItemList productos={productos} />}

    </>
  )

}

export default ItemListContainer