import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const stockSeguro = Number(stock);
  const [count, setCount] = useState(initial || 1);

  const increment = () => {
    if (count < stockSeguro) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="mt-4 text-center">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      
        <button 
          className="btn btn-outline-secondary" 
          onClick={decrement} 
          disabled={count <= 1}
        > - </button>
        
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{count}</span>
        
        <button 
          className="btn btn-outline-secondary" 
          onClick={increment} 
          disabled={count >= stockSeguro}
        > + </button>
      </div>

      {count >= stockSeguro && (
        <p className="text-danger mt-2 fw-bold">¡Llegaste al límite de stock disponible!</p>
      )}
      
      <button 
        className="btn btn-primary mt-3 w-100" 
        onClick={() => onAdd(count)}
      >
        Agregar al carrito ({count})
      </button>
    </div>
  );
};

export default ItemCount;