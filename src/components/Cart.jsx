import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  // Traemos todo lo necesario del Context
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  // Si el carrito está vacío, mostramos este mensaje
  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Tu carrito está vacío, ¡sumá algunos vinos! 🍷</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tu carrito</h1>

      {cart.map((prod) => (
        <div 
          key={prod.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px"
          }}
        >
          <div>
            {/* Usamos las propiedades correctas en español */}
            <h4>{prod.nombre}</h4>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
          </div>

          <button 
            onClick={() => removeItem(prod.id)}
            className="btn btn-danger"
          >
            ❌ Eliminar
          </button>
        </div>
      ))}

      {/* Aquí llamamos a la función que calcula el total con las claves correctas */}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <h3>Total de la compra: ${totalPrice()}</h3>
        
        <button 
          onClick={clearCart}
          className="btn btn-warning"
          style={{ marginTop: "10px" }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;