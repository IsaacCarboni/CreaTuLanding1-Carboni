import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { itemId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((data) => {
        setProduct(data);
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