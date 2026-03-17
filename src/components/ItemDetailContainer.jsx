import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { itemId } = useParams(); 

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);
    
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
      
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [itemId]); 

  if (loading) return <h2 style={{ textAlign: "center" }}>Descorchando el vino... 🍷</h2>;

  if (!product) return <h2 style={{ textAlign: "center" }}>El producto no existe o se terminó el stock 😅</h2>;
  
  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;