import { useState, useEffect } from "react";
import { db } from "../firebase/config"; // Asegurá que la ruta sea correcta
import { collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // 1. Apuntamos a la colección 'productos' que acabás de crear
        const productosRef = collection(db, "productos");

        // 2. Pedimos los documentos
        getDocs(productosRef)
            .then((resp) => {
                // 3. Transformamos la respuesta en un array que React entienda
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            })
        
    }, []);

    return (
        <div>
            {/* Aquí va tu componente ItemList pasándole los productos */}
            <ItemList productos={productos} />
        </div>
    );
};
export default ItemListContainer;