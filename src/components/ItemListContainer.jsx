import { useState, useEffect } from "react";
import { db } from "../firebase/config"; 
import { collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");

        getDocs(productosRef)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            })
            .catch((error) => console.error("Error al cargar productos:", error))
            .finally(() => setLoading(false)); 
    }, []);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <h3>Cargando los mejores vinos para vos...</h3>
                <div className="spinner-border text-danger" role="status"></div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;