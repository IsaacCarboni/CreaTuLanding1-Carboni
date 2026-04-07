import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        // Usamos Name y Price (mayúsculas) para que el carrito no de $0
        const itemToCart = {
            id: item.id,
            Name: item.Name,
            Price: item.Price,
            img: item.img
        };
        addItem(itemToCart, quantity);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={item.img} alt={item.Name} className="img-fluid rounded shadow" style={{maxHeight: "500px"}} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    {/* CORRECCIÓN: Usamos Name y Price con mayúscula inicial */}
                    <h1 className="fw-bold">{item.Name}</h1>
                    <p className="text-muted h4 mb-3">{item.categoria}</p>
                    <h2 className="text-danger mb-4">${item.Price}</h2>
                    
                    <p className="mb-4">Stock disponible: {item.Stock}</p>

                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className="btn btn-dark w-100">Terminar compra</Link>
                        ) : (
                         <ItemCount initial={1} stock={item.Stock || 0} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;