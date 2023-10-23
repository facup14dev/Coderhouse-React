import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const productos = [
    { id: 1, name: "Camiseta de algodón", description: "Camiseta de algodón suave y cómoda", price: 10, category: 2, stock: 9 },
    { id: 2, name: "Jeans ajustados", description: "Jeans ajustados de alta calidad", price: 20, category: 1, stock: 8 },
    { id: 3, name: "Vestido de noche", description: "Elegante vestido de noche para ocasiones especiales", price: 30, category: 1, stock: 7 },
    { id: 4, name: "Zapatos deportivos", description: "Zapatos cómodos para correr y hacer ejercicio", price: 40, category: 2, stock: 6 },
    { id: 5, name: "Blusa de seda", description: "Blusa elegante de seda con detalles encaje", price: 10, category: 1, stock: 5 },
    { id: 6, name: "Chaqueta de cuero", description: "Chaqueta de cuero genuino con estilo moderno", price: 20, category: 3, stock: 4 },
    { id: 7, name: "Pantalones de vestir", description: "Pantalones de vestir ideales para ocasiones formales", price: 30, category: 3, stock: 3 },
    { id: 8, name: "Abrigo de lana", description: "Abrigo de lana cálido para el invierno", price: 40, category: 3, stock: 2 },
    { id: 9, name: "Blazer elegante", description: "Blazer elegante para eventos formales", price: 40, category: 2, stock: 1},
    { id: 10, name: "Gorra de béisbol", description: "Gorra de béisbol ajustable con diseño clásico", price: 40, category: 2, stock: 1}
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
    <ItemList productos={productos} />
    </>
  )

}

export default ItemListContainer