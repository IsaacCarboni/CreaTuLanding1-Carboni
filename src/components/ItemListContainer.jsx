import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; // Importamos la conexión
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // 1. Creamos la referencia a la colección "productos"
        const productosRef = collection(db, "productos");

        // 2. Pedimos los documentos a Firebase
        getDocs(productosRef)
            .then((snapshot) => {
                // Mapeamos los datos y sumamos el ID de Firebase
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(docs);
            });
    }, []);

    return <ItemList items={products} />;
};  
 export default ItemListContainer