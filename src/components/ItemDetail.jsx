import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    addItem(item, cantidad);

    
    alert(`✅ Agregaste ${cantidad} ${item.nombre} al carrito`);
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <img 
        src={item.img} 
        alt={item.nombre} 
        style={{ width: "300px" }} 
      />

      <div>
        <h1>{item.nombre}</h1>
        <p>{item.categoria}</p>

        <h2>${item.precio}</h2>

        <ItemCount 
          stock={10} 
          initial={1} 
          onAdd={handleOnAdd} 
        />
      </div>
    </div>
  );
};

export default ItemDetail;