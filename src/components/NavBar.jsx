import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <nav style={styles.nav}>
      {}
      <div style={styles.overlay}>
        <h2 style={styles.title}>Bodega de Isa 🍷</h2>

        <div style={styles.links}>
          <Link to="/" style={styles.linkText}>Inicio</Link>
          <Link to="/category/vinos" style={styles.linkText}>Vinos</Link>
          <Link to="/category/ofertas" style={styles.linkText}>Ofertas</Link>
          <Link to="/cart" style={styles.cartIcon}>🛒</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {

    backgroundImage: 'url("/img/header-bg.jpg")', 
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "0", 
    color: "white",
    borderBottom: "4px solid #4a0000",
  },
  overlay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    width: "100%",
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)", 
  },
  links: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },
  linkText: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1.1rem",
  },
  cartIcon: {
    fontSize: "1.5rem",
    textDecoration: "none",
  }
};

export default NavBar;