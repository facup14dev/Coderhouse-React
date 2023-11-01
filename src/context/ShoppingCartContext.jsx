import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({
    children }) => {
    //Espacio para crear estados, variables, funciones, etc

    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const comision = 60815


    const decrementCount = () => {
        if(count > 1) { setCount(count - 1) ;}
    }
    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <CartContext.Provider value={{count,decrementCount, incrementCount, comision}}>
            {children}
        </CartContext.Provider>

    )

}

export default ShoppingCartProvider