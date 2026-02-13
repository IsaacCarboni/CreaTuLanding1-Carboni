import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <button onClick={decrement} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
      
      {}
      <button 
        onClick={() => onAdd(count)} 
        style={styles.addBtn}
      >
        Agregar al carrito
      </button>
    </div>
  );
};


const styles = {
  button: {
    padding: "5px 15px",
    cursor: "pointer",
    fontSize: "1.2rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  count: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    minWidth: "40px",
    textAlign: "center"
  },
  addBtn: {
    backgroundColor: "#4a0000",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold"
  }
};

export default ItemCount;