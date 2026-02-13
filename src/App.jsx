import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound"; // 1. Importalo

function App() {
  return (
    // 'bg-light' aplica un fondo gris muy suave y profesional
    // 'min-vh-100' hace que el fondo ocupe TODA la altura de la pantalla
    <div className="bg-light min-vh-100">
      <NavBar />
      
      {/* 'container' centra el contenido y 'py-4' le da espacio arriba y abajo */}
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

