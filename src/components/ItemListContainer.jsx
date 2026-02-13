import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { getProducts } from "../data/products"; 
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    
    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); 

  if (loading) return <h2>Cargando catálogo... 🍷</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
        {categoryId ? categoryId : "Nuestros Productos"}
      </h1>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;