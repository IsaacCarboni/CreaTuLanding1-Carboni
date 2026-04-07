import { Link } from "react-router-dom";

const Item = ({ item }) => {
    // 🔍 Aplicando lo que explica Diego en clase:
    // Esto te va a mostrar en la consola: ["id", "Name", "Price", ...]
    console.log("Nombres de las propiedades (Keys):", Object.keys(item));
    console.log("Valores de las propiedades (Values):", Object.values(item));

    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={item.img} 
                    className="card-img-top" 
                    alt={item.Name} 
                    style={{ height: "200px", objectFit: "cover" }} 
                />
                
                <div className="card-body d-flex flex-column text-center">
                    <h5 className="card-title fw-bold">{item.Name || "Sin Nombre"}</h5>
                    <p className="card-text text-muted mb-1">{item.categoria}</p>
                    
                    {/* 💰 El precio con triple validación por las dudas */}
                    <p className="h5 text-danger mb-3">
                        $ {item.Price || item.price || item.precio || "0.00"}
                    </p>
                    
                    <Link 
                        to={`/item/${item.id}`} 
                        className="btn btn-danger mt-auto w-100"
                    >
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;