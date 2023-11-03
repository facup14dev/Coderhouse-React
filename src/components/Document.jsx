import React, { useEffect, useState} from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const Document = () => {

    const [producto, setProducto] = useState([])

    
    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "ropa", "nFSiprRtpy7G1YQiIqsC") //${id}
    })

  return (
    <div>Document</div>
  )
}

export default Document