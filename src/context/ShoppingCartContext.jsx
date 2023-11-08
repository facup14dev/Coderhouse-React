import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({
    children }) => {

    const [count, setCount] = useState(1)
    const [countCart, setCountCart] = useState(0)


    const [cart, setCart] = useState([])

    const [selectedSize, setSelectedSize] = useState('S')
    

    const decrementCount = () => {
        if(count > 1) { setCount(count - 1) ;}
    }
    const incrementCount = () => {
        setCount(count + 1)
    }



    return (
        <CartContext.Provider value={{cart, setCart, count,decrementCount, incrementCount, selectedSize, setSelectedSize, countCart, setCountCart}}>
            {children}
        </CartContext.Provider>

    )

}

export default ShoppingCartProvider