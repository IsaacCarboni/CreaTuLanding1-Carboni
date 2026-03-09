import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Capturamos el ID que viene en la URL
  const { itemId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    
    // 1. Creamos la referencia al documento específico en Firestore
    const docRef = doc(db, "productos", itemId);
    
    // 2. Traemos el documento de Firebase
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Si el producto existe, guardamos sus datos + su ID en el estado
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } 
      })
      .finally(() => {
        setLoading(false); // Terminamos la carga pase lo que pase
      });
  }, [itemId]); // Cada vez que el ID cambie, se dispara el efecto de nuevo

  // Mostramos estado de carga
  if (loading) return <h2 style={{ textAlign: "center" }}>Descorchando el vino... 🍷</h2>;

  // Si después de cargar no hay producto, mostramos error
  if (!product) return <h2 style={{ textAlign: "center" }}>El producto no existe o se terminó el stock 😅</h2>;

  // Si todo salió bien, renderizamos el componente de detalle
  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;