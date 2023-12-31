import React from 'react'
import Item from './Item/Item'

const ItemList = ({ productos }) => {

    return (
        <div className='cards-container'>
            {
                productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            price={p.price}
                            category={p.category}
                            stock={p.stock}
                            img={p.img}
                        />
                    )
                })
            }
        </div>
    )
}

export default React.memo(ItemList)