import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


  const productos = [
    { id: 1, name: "Camiseta de algodón", description: "Camiseta de algodón suave y cómoda", price: 10, priceDiscount: 10, category: "hombre", stock: 9, img: "../public/images/camiseta de algodon.jpg"  },
    { id: 2, name: "Jeans ajustados", description: "Jeans ajustados de alta calidad", price: 20, priceDiscount: 10, category: "mujer", stock: 8, img: "../public/images/jeans.jpg"  },
    { id: 3, name: "Vestido de noche", description: "Elegante vestido de noche para ocasiones especiales", price: 30, priceDiscount: 10, category: "mujer", stock: 7, img: "../public/images/vestido.jpg"  },
    { id: 4, name: "Zapatos deportivos", description: "Zapatos cómodos para correr y hacer ejercicio", price: 40, priceDiscount: 10, category: "hombre", stock: 6, img: "../public/images/zapas.jpg"  },
    { id: 5, name: "Blusa de seda", description: "Blusa elegante de seda con detalles encaje", price: 10, priceDiscount: 10, category: "mujer", stock: 5, img: "../public/images/blusa.jpg"  },
    { id: 6, name: "Chaqueta de cuero", description: "Chaqueta de cuero genuino con estilo moderno", price: 20, priceDiscount: 10, category: "niño", stock: 4, img: "../public/images/chaqueta.jpg"  },
    { id: 7, name: "Pantalones de vestir", description: "Pantalones de vestir ideales para ocasiones formales", price: 30, priceDiscount: 10, category: "niño", stock: 3, img: "../public/images/pantalon de vestir.jpg"  },
    { id: 8, name: "Abrigo de lana", description: "Abrigo de lana cálido para el invierno", price: 40, priceDiscount: 10, category: "niño", stock: 2, img: "../public/images/abrigo de lana.jpg"  },
    { id: 9, name: "Blazer elegante", description: "Blazer elegante para eventos formales", price: 40, priceDiscount: 10, category: "hombre", stock: 1, img: "../public/images/blazer.jpg"  },
    { id: 10, name: "Gorra de béisbol", description: "Gorra de béisbol ajustable con diseño clásico", price: 40, priceDiscount: 10, category: "hombre", stock: 1, img: "../public/images/gorra.jpg"  }
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
    
    <ItemDetail 
        productos={productos}
    />
    
    </>
  )
}

export default ItemDetailContainer