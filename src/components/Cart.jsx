import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // <--- Necesario para navegar
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  const handleClear = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to empty your wine cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b30000", 
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, empty it",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); 
        Swal.fire({
          title: "Emptied",
          text: "Your cart is ready for new selections.",
          icon: "success"
        });
      }
    });
  };

  // 1. Vista si el carrito está vacío (Agregamos botón de retorno)
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>🛒 Your cart is empty, add some wines! 🍷</h2>
        <Link to="/" className="btn btn-dark mt-4">Go to Store</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ padding: "20px" }}>
      <h1 className="mb-4">Your Cart</h1>

      {cart.map((prod) => (
        <div key={prod.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "8px" }}>
          <div>
            <h4 className="fw-bold">{prod.Name}</h4>
            <p className="mb-1">Quantity: {prod.quantity}</p>
            <p className="mb-1">Unit Price: ${prod.Price}</p>
            <p className="fw-bold text-danger">Subtotal: ${prod.Price * prod.quantity}</p>
          </div>
          <button onClick={() => removeItem(prod.id)} className="btn btn-outline-danger">❌ Remove</button>
        </div>
      ))}

      <div className="mt-5" style={{ textAlign: "right" }}>
        <h2 className="fw-bold mb-4">Total purchase: ${totalPrice()}</h2>
        
        {/* GRUPO DE BOTONES */}
        <div className="d-flex justify-content-end gap-3">
            {/* Botón Seguir Comprando */}
            <Link to="/" className="btn btn-outline-dark px-4">
                Keep Shopping 🍷
            </Link>

            {/* Botón Vaciar */}
            <button onClick={handleClear} className="btn btn-warning px-4">
                Empty Cart
            </button>

            {/* Botón Finalizar (Te llevará al formulario de checkout) */}
            <Link to="/checkout" className="btn btn-success px-5 fw-bold">
                Finalize Purchase 🚀
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;