import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    // 1. El estado 'count' es el que lleva el número en pantalla
    const [count, setCount] = useState(initial);

    // 2. Función para SUMAR
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("¡Epa! No hay más stock de este vinazo.");
        }
    };

    // 3. Función para RESTAR
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-3">
                {/* Botón de resta */}
                <button className="btn btn-outline-danger px-3" onClick={decrement}> - </button>
                
                {/* El número que tiene que cambiar */}
                <h4 className="mx-4 mt-2 fw-bold">{count}</h4>
                
                {/* Botón de suma */}
                <button className="btn btn-outline-success px-3" onClick={increment}> + </button>
            </div>

            {/* Botón para enviar al carrito */}
            <button 
                className="btn btn-dark w-100" 
                onClick={() => onAdd(count)} 
                disabled={stock <= 0}
            >
                {stock <= 0 ? "Sin Stock" : "Agregar al carrito"}
            </button>
        </div>
    );
};

export default ItemCount;