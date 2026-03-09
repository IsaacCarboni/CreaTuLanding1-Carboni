import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {

  const { totalQuantity } = useContext(CartContext);

  return (
    <span style={{ fontSize: "24px" }}>
      🛒 {totalQuantity()}
    </span>
  );
}

export default CartWidget;