import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export function CartProvider({ children }) {
  const [cart, setCart] = useState(carritoInicial);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity } // Cambiado a quantity
          : prod
      );
      setCart(updatedCart);
    } else {
      // Guardamos el item con quantity
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    // Usamos quantity
    return cart.reduce((acc, prod) => acc + (prod.quantity || 0), 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => {
      // IMPORTANTE: Usamos Price (mayúscula) y quantity (minúscula)
      const precio = Number(prod.Price) || 0; 
      const cantidad = Number(prod.quantity) || 0;
      return acc + (precio * cantidad);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity, 
        totalPrice      
      }}
    >
      {children}
    </CartContext.Provider>
  );
}