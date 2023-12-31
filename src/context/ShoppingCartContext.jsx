import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({
    children }) => {

    const [count, setCount] = useState(1)
    const [countCart, setCountCart] = useState(0)
    const [cart, setCart] = useState([])
    const [selectedSize, setSelectedSize] = useState('S')

    //Tamaño elegido del producto
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    //Cantidades del prodcuto.
    const decrementCount = () => {
        if (count > 1) { setCount(count - 1); }
    }
    const incrementCount = () => {
        setCount(count + 1)
    }

    //Añade el prodcuto al carrito, si ya existe y es el mismo tamaño aumenta su cantidad si es el mismo producto pero distinta cantidad agrega un producto nuevo.
    const addCart = (producto) => {

        const carritoActualizado = [...cart];
        const productoExistente = carritoActualizado.find((item) => item.id === producto.id && item.size === selectedSize);

        if (productoExistente) {
            productoExistente.cantidad += count;
        } else {
            const nuevoProducto = {
                id: producto.id,
                name: producto.name,
                img: producto.img,
                price: producto.price,
                cantidad: count,
                size: selectedSize,
            };

            carritoActualizado.push(nuevoProducto);
            setCountCart(countCart + 1)
        }

        setCart(carritoActualizado);
    };

    //Elimina el producto del carrito.
    const clearCart = (productId, size) => {
        const updatedCart = cart.filter((item) => item.id !== productId || item.size !== size);
        setCart(updatedCart);
        setCountCart(countCart - 1);
    };

    //Funcion que calcula el total del carrito.
    const cartTotal = () => {
        let total = 0;
        for (const item of cart) {
            total += item.price * item.cantidad;
        }
        total = parseFloat(total.toFixed(3));
        return total;
    };


    return (
        <CartContext.Provider value={{ cart, setCart, count, decrementCount, incrementCount, selectedSize, setSelectedSize, countCart, setCountCart, handleSizeClick, addCart, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>

    )

}

export default ShoppingCartProvider