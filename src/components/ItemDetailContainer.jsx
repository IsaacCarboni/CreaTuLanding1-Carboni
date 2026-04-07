import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // <--- Importante para capturar el ID
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); // <--- Acá es donde "nace" itemId

    useEffect(() => {
        // Creamos la referencia al documento específico en Firebase
        const docRef = doc(db, "productos", itemId);

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    // Guardamos los datos en el estado
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                }
            })
            .catch((error) => {
                console.error("Error al traer el vino: ", error);
            });
    }, [itemId]);

    return (
        <div className="container mt-5">
            {/* Si el producto existe, mostramos el detalle */}
            {product ? <ItemDetail item={product} /> : <h2>Cargando el vino... 🍷</h2>}
        </div>
    );
};

export default ItemDetailContainer;