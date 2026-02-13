import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div style={styles.container}>
      {items.map((prod) => (
        <div key={prod.id} style={styles.card}>
          <img src={prod.img} alt={prod.name} style={styles.img} />
          <h3>{prod.name}</h3>
          <p>${prod.price}</p>
          <Link to={`/item/${prod.id}`} style={styles.btn}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" },
  card: { border: "1px solid #ccc", padding: "15px", borderRadius: "8px", textAlign: "center", width: "200px" },
  img: { width: "100%", height: "200px", objectFit: "cover" },
  btn: { display: "block", marginTop: "10px", padding: "8px", backgroundColor: "#4a0000", color: "white", textDecoration: "none", borderRadius: "5px" }
};

export default ItemList;