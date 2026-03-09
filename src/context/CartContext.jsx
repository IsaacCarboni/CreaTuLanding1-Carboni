import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + quantity } // Usamos 'cantidad'
          : prod
      );
      setCart(updatedCart);
    } else {
      // Guardamos 'cantidad' en lugar de 'quantity'
      setCart([...cart, { ...item, cantidad: quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + (prod.cantidad || 0), 0);
  };

const totalPrice = () => {
    return cart.reduce((acc, prod) => {
      
      const precio = Number(prod.precio) || 0;
      const cantidad = Number(prod.cantidad) || 0;
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