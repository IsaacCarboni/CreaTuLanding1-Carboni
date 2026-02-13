import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>¡Ups! Parece que esta barrica está vacía. 🍷</p>
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueXZueXJueXJueXJueXJueXJueXJueXJueXJueXJueXJueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h8NdYZJGH1ZRe/giphy.gif" 
        alt="Vino derramado" 
        style={styles.image}
      />
      <br />
      <Link to="/" style={styles.button}>Volver a la Bodega</Link>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "50px", fontFamily: "Arial" },
  title: { fontSize: "5rem", color: "#4a0000", margin: "0" },
  text: { fontSize: "1.5rem", color: "#333" },
  image: { width: "300px", borderRadius: "10px", margin: "20px 0" },
  button: { 
    backgroundColor: "#4a0000", 
    color: "white", 
    padding: "10px 20px", 
    textDecoration: "none", 
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

export default NotFound;