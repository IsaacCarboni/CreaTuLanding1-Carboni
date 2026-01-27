import CartWidget from "./CartWidget";

function NavBar(){
     return (
         <nav className="navbar">
            <h2>Bodega de Isaa</h2>
            <ul className="categories">
                <li>
                  Vinos
                </li>
                <li>
                    Espumantes
                </li>
                <li>
                    Ofertas
                </li>
            </ul>
            <CartWidget />
            </nav>
            );
            }
            export default NavBar;