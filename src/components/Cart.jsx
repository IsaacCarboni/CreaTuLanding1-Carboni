import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';
const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  const handleClear = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Vas a vaciar todo el carrito de vinos!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b30000", 
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); 
        Swal.fire({
          title: "Vaciado",
          text: "El carrito está listo para nuevas selecciones.",
          icon: "success"
        });
      }
    });
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Tu carrito está vacío, ¡sumá algunos vinos! 🍷</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tu carrito</h1>

      {cart.map((prod) => (
        <div key={prod.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "8px" }}>
          <div>
            <h4>{prod.nombre}</h4>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio unitario: ${prod.precio}</p>
            <p>Subtotal: ${prod.precio * prod.cantidad}</p>
          </div>
          <button onClick={() => removeItem(prod.id)} className="btn btn-danger">❌ Eliminar</button>
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <h3>Total de la compra: ${totalPrice()}</h3>
        
        <button 
          onClick={handleClear} 
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