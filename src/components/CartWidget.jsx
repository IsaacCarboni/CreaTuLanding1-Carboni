import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", color: "white", fontSize: "1.2rem" }}>
      🛒
      {totalQuantity() > 0 && (
        <span style={{ marginLeft: "5px", fontWeight: "bold", backgroundColor: "#b30000", borderRadius: "50%", padding: "2px 8px", fontSize: "0.9rem" }}>
          {totalQuantity()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;